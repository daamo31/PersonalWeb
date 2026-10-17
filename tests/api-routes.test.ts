import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { NextRequest } from 'next/server';
import { POST as chatPost } from '../src/app/api/chat/route';
import { POST as contactPost } from '../src/app/api/contact/route';

const originalRedisUrl = process.env.UPSTASH_REDIS_REST_URL;
const originalRedisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const originalGeminiKey = process.env.GEMINI_API_KEY;
const originalNodeEnv = process.env.NODE_ENV;

delete process.env.UPSTASH_REDIS_REST_URL;
delete process.env.UPSTASH_REDIS_REST_TOKEN;
delete process.env.GEMINI_API_KEY;

after(() => {
  if (originalRedisUrl === undefined) delete process.env.UPSTASH_REDIS_REST_URL;
  else process.env.UPSTASH_REDIS_REST_URL = originalRedisUrl;

  if (originalRedisToken === undefined) delete process.env.UPSTASH_REDIS_REST_TOKEN;
  else process.env.UPSTASH_REDIS_REST_TOKEN = originalRedisToken;

  if (originalGeminiKey === undefined) delete process.env.GEMINI_API_KEY;
  else process.env.GEMINI_API_KEY = originalGeminiKey;

  if (originalNodeEnv === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalNodeEnv;
});

test('contact route rejects invalid form data without calling Telegram', async () => {
  const request = new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'x-real-ip': '203.0.113.101' },
    body: JSON.stringify({ name: 'A', email: 'invalid', phone: '12', message: 'short' }),
  });

  const response = await contactPost(request);
  assert.equal(response.status, 400);
});

test('contact route sends escaped HTML to Telegram', async () => {
  const originalFetch = globalThis.fetch;
  const originalTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const originalTelegramChatId = process.env.TELEGRAM_CHAT_ID;
  let telegramPayload: Record<string, unknown> | undefined;

  process.env.TELEGRAM_BOT_TOKEN = 'test-token';
  process.env.TELEGRAM_CHAT_ID = 'test-chat';
  globalThis.fetch = async (_input, init) => {
    telegramPayload = JSON.parse(String(init?.body)) as Record<string, unknown>;
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  try {
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'x-real-ip': '203.0.113.102' },
      body: JSON.stringify({
        name: '<b>Ada</b>',
        email: 'ada@example.com',
        phone: '+1 555 555 5555',
        message: 'Hello & welcome',
      }),
    });

    const response = await contactPost(request);
    assert.equal(response.status, 200);
    assert.equal(telegramPayload?.parse_mode, 'HTML');
    assert.match(String(telegramPayload?.text), /&lt;b&gt;Ada&lt;\/b&gt;/);
    assert.match(String(telegramPayload?.text), /Hello &amp; welcome/);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalTelegramToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
    else process.env.TELEGRAM_BOT_TOKEN = originalTelegramToken;
    if (originalTelegramChatId === undefined) delete process.env.TELEGRAM_CHAT_ID;
    else process.env.TELEGRAM_CHAT_ID = originalTelegramChatId;
  }
});

test('chat route returns its fallback as a server-sent event stream', async () => {
  const request = new NextRequest('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'x-real-ip': '203.0.113.103' },
    body: JSON.stringify({ message: 'hola', history: [] }),
  });

  const response = await chatPost(request);
  const stream = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /text\/event-stream/);
  assert.match(stream, /Hola, soy Daniel/);
  assert.match(stream, /"done": true/);
});

test('chat remains available in production without Upstash or Gemini credentials', async () => {
  process.env.NODE_ENV = 'production';
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
  delete process.env.GEMINI_API_KEY;

  const request = new NextRequest('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'x-real-ip': '203.0.113.104' },
    body: JSON.stringify({ message: 'hola', history: [] }),
  });

  const response = await chatPost(request);
  const stream = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /text\/event-stream/);
  assert.match(stream, /Hola, soy Daniel/);
});