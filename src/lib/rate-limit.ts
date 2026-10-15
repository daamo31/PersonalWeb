import { NextRequest } from 'next/server';

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetAt: number;
};

const localStore = new Map<string, { count: number; resetAt: number }>();

export function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-real-ip') ??
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',').at(-1)?.trim() ??
    'unknown'
  );
}

export async function checkRateLimit(
  scope: string,
  clientIP: string,
  limit: number,
  windowMs: number,
): Promise<RateLimitResult> {
  const key = `rate-limit:${scope}:${clientIP}`;
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Shared rate limit storage is not configured');
    }

    const now = Date.now();
    const current = localStore.get(key);
    if (!current || current.resetAt <= now) {
      const entry = { count: 1, resetAt: now + windowMs };
      localStore.set(key, entry);
      return { allowed: true, remaining: limit - 1, resetAt: entry.resetAt };
    }

    current.count += 1;
    return {
      allowed: current.count <= limit,
      remaining: Math.max(0, limit - current.count),
      resetAt: current.resetAt,
    };
  }

  try {
    const script = `local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('PEXPIRE', KEYS[1], ARGV[1]); end; local ttl = redis.call('PTTL', KEYS[1]); return {count, ttl}`;
    const response = await fetch(redisUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(['EVAL', script, '1', key, String(windowMs)]),
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload: { result?: [number, number] } = await response.json();
    const [count, ttl] = payload.result ?? [];
    if (typeof count !== 'number' || typeof ttl !== 'number') {
      throw new Error('Invalid rate limit response');
    }

    return {
      allowed: count <= limit,
      remaining: Math.max(0, limit - count),
      resetAt: Date.now() + Math.max(0, ttl),
    };
  } catch {
    throw new Error('Rate limit storage is unavailable');
  }
}