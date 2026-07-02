import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createRateLimiter,
  isSubmissionTooFast,
} from "../contactSecurity.ts";

test("flags submissions sent before the minimum form age", () => {
  const now = 10_000;

  assert.equal(isSubmissionTooFast("9000", now, 2_000), true);
  assert.equal(isSubmissionTooFast("7000", now, 2_000), false);
});

test("flags missing or invalid form timestamps", () => {
  assert.equal(isSubmissionTooFast("", 10_000, 2_000), true);
  assert.equal(isSubmissionTooFast("not-a-date", 10_000, 2_000), true);
});

test("limits submissions by key within the active window", () => {
  const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 });

  assert.equal(limiter.check("203.0.113.10", 1_000).allowed, true);
  assert.equal(limiter.check("203.0.113.10", 2_000).allowed, true);

  const blocked = limiter.check("203.0.113.10", 3_000);

  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfterSeconds, 58);
});

test("rate limit windows expire independently per key", () => {
  const limiter = createRateLimiter({ limit: 1, windowMs: 10_000 });

  assert.equal(limiter.check("203.0.113.10", 1_000).allowed, true);
  assert.equal(limiter.check("203.0.113.11", 2_000).allowed, true);
  assert.equal(limiter.check("203.0.113.10", 3_000).allowed, false);
  assert.equal(limiter.check("203.0.113.10", 12_000).allowed, true);
});
