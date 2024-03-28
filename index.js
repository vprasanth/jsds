import { MinHeap, HeapItem } from "./lib/min-heap.js";
import { RateLimit, RateLimiter } from "./utils/rate-limiter.js";
import { execSync } from "child_process";

const h = new MinHeap();

const arr = [4, 6, 34, 12, 1, 5];

// console.log(h);

for (let item of arr) {
  h.push(new HeapItem(item));
}

// console.log(h);
// console.log(h.pop());

const testRl = new RateLimit("test", [1, 5]);
const rl = new RateLimiter([testRl]);

console.log(testRl);
console.log(rl);

const results = [];
for (let i = 0; i < 10; i++) {
  results.push(rl.canPass("test"));
  execSync("sleep 1");
}

console.log(results);
console.log(rl);
