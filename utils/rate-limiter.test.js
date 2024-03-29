import { jest } from "@jest/globals";
import { RateLimiter, RateLimit } from "./rate-limiter.js";

test("RateLimiter", () => {
  expect(new RateLimiter()).toBeTruthy();
});
