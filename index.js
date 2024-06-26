import { RateLimit, RateLimiter } from "./utils/rate-limiter.js";
import { execSync } from "child_process";

const testRl = new RateLimit("test", 60, 5);
const rl = new RateLimiter([testRl]);

console.log(testRl);
console.log(rl);

const results = [];
results.push(rl.canPass("test"));

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 15; j++) {
    results.push(rl.canPass("test"));
  }
  execSync("sleep 6");
}

console.log(results);
console.log(rl);
