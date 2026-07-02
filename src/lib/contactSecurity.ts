export type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export const CONTACT_FORM_MIN_AGE_MS = 2_000;
export const CONTACT_RATE_LIMIT = {
  limit: 5,
  windowMs: 10 * 60 * 1_000,
};

export function isSubmissionTooFast(
  startedAt: string,
  now = Date.now(),
  minAgeMs = CONTACT_FORM_MIN_AGE_MS,
) {
  const startedAtMs = Number(startedAt);

  if (!Number.isFinite(startedAtMs) || startedAtMs <= 0) {
    return true;
  }

  return now - startedAtMs < minAgeMs;
}

export function createRateLimiter({ limit, windowMs }: RateLimitOptions) {
  const submissions = new Map<string, number[]>();

  function check(key: string, now = Date.now()): RateLimitResult {
    const cutoff = now - windowMs;
    const recentSubmissions = (submissions.get(key) || []).filter(
      (timestamp) => timestamp > cutoff,
    );

    if (recentSubmissions.length >= limit) {
      const retryAfterMs = recentSubmissions[0] + windowMs - now;

      submissions.set(key, recentSubmissions);

      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1_000)),
      };
    }

    recentSubmissions.push(now);
    submissions.set(key, recentSubmissions);

    return { allowed: true, retryAfterSeconds: 0 };
  }

  return { check };
}
