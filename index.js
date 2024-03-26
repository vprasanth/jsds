import { MinHeap, HeapItem } from "./lib/min-heap.js";
const h = new MinHeap();

const arr = [4, 6, 34, 12, 1, 5];

console.log(h);

for (let item of arr) {
  h.push(new HeapItem(item));
}

console.log(h);
console.log(h.pop());
