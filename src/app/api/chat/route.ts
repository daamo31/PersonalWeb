import { systemPrompt } from '@/config/ChatPrompt';
import { checkRateLimit, getClientIP } from '@/lib/rate-limit';
import { readBoundedBody } from '@/lib/request-body';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(z.object({ text: z.string().max(2000) })).min(1).max(1),
      }).strict(),
    )
    .max(10)
    .optional()
    .default([]),
});

function isSpanish(text: string): boolean {
  return /[¿¡]|\b(hola|proyecto|proyectos|servicios|contacto|trabajo|experiencia|tecnologias|tecnología|presupuesto|precio|automatizacion|automatización)\b/i.test(
    text,
  );
}

function getFallbackReply(message: string): string {
  const msg = message.toLowerCase();
  const inSpanish = isSpanish(message);

  if (inSpanish) {
    if (/(hola|buenas|hey|que tal|qué tal)/i.test(msg)) {
      return 'Hola, soy Daniel. Ahora mismo el modo IA avanzado no está activo, pero puedo ayudarte. Puedo orientarte sobre proyectos, servicios y contacto.';
    }

    if (/(precio|presupuesto|coste|costo)/i.test(msg)) {
      return 'Depende del alcance y del plazo. Si quieres, cuéntame objetivo, funcionalidades y fecha límite y te preparo una estimación inicial.';
    }

    if (/(servicio|servicios|automatiz|ia|api|web)/i.test(msg)) {
      return 'Trabajo en desarrollo web, backend/APIs y automatización de procesos con IA. Si me compartes tu caso, te propongo una solución concreta.';
    }

    if (/(contact|email|correo|linkedin|github)/i.test(msg)) {
      return 'Puedes contactarme en danieldelamo31@protonmail.com o por LinkedIn: https://www.linkedin.com/in/danieldelamotarrero/';
    }

    return 'Ahora mismo el asistente IA está en modo básico. Escríbeme qué necesitas (web, API o automatización) y te ayudo con los siguientes pasos.';
  }

  if (/(hello|hi|hey)/i.test(msg)) {
    return 'Hi, I am Daniel. Advanced AI mode is not active right now, but I can still help with projects, services, and contact details.';
  }

  if (/(price|budget|cost|quote)/i.test(msg)) {
    return 'Pricing depends on scope and timeline. Share your goals, required features, and deadline, and I can give you an initial estimate.';
  }

  if (/(service|services|automation|ai|api|web)/i.test(msg)) {
    return 'I work on web development, backend/APIs, and AI process automation. Share your use case and I will suggest a concrete approach.';
  }

  if (/(contact|email|linkedin|github)/i.test(msg)) {
    return 'You can reach me at danieldelamo31@protonmail.com or LinkedIn: https://www.linkedin.com/in/danieldelamotarrero/';
  }

  return 'The assistant is currently in basic mode. Tell me what you need (web app, API, or automation), and I will guide you on next steps.';
}

function sanitizeInput(input: string): string {
  const injectionPatterns = [
    /ignore previous instructions/gi,
    /system prompt/gi,
    /you are now/gi,
    /act as/gi,
    /pretend to be/gi,
    /ignore all previous/gi,
    /forget everything/gi,
    /new instructions/gi,
    /override/gi,
    /bypass/gi,
    /hack/gi,
    /exploit/gi,
    /inject/gi,
    /prompt injection/gi,
    /system message/gi,
    /role play/gi,
    /character/gi,
    /persona/gi,
    /behave as/gi,
    /respond as/gi,
  ];

  let sanitized = input;

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, '[REDACTED]');
  });

  sanitized = sanitized.trim().replace(/\s+/g, ' ');

  if (sanitized.length > 2000) {
    sanitized = sanitized.substring(0, 2000);
  }

  return sanitized;
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 24_000) {
      return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
    }

    const clientIP = getClientIP(request);
    const rateLimit = await checkRateLimit(
      'chat',
      clientIP,
      RATE_LIMIT_MAX_REQUESTS,
      RATE_LIMIT_WINDOW,
    );

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetAt.toString(),
          },
        },
      );
    }

    const text = await readBoundedBody(request, 24_000);
    if (text === null) {
      return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
    }
    if (!text) {
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }

    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const validatedData = chatSchema.parse(body);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const encoder = new TextEncoder();
      const fallbackText = getFallbackReply(validatedData.message);

      const stream = new ReadableStream({
        start(controller) {
          const sseData = `data: ${JSON.stringify({ text: fallbackText })}\n\n`;
          controller.enqueue(encoder.encode(sseData));
          controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
          controller.close();
        },
      });

      return new NextResponse(stream, {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
          'Access-Control-Allow-Origin': '*',
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      });
    }

    // Initialize Gemini client
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemPrompt,
    });

    // Prepare chat history - SDK requires first message to be from user
    const chatHistory = validatedData.history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: msg.parts.map((part) => ({
        text: msg.role === 'user' ? sanitizeInput(part.text) : part.text,
      })),
    }));

    // Remove any leading model messages to ensure first message is from user
    while (chatHistory.length > 0 && chatHistory[0].role === 'model') {
      chatHistory.shift();
    }

    // Start a new chat session
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = await chat.sendMessageStream(
            sanitizeInput(validatedData.message),
          );

          for await (const chunk of response.stream) {
            const text = chunk.text();
            if (text) {
              const sseData = `data: ${JSON.stringify({ text })}\n\n`;
              controller.enqueue(encoder.encode(sseData));
            }
          }

          // Send completion signal
          controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          const errorData = `data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`;
          controller.enqueue(encoder.encode(errorData));
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid request data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    console.error('Chat API Error:', error);

    if (error instanceof Error && error.message.includes('rate limit storage')) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
