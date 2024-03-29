import { HeapItem, MinHeap } from "./min-heap.js";

test("Should handle pop when no items are present", () => {
  const h = new MinHeap();
  expect(h.pop()).toBeFalsy();
});

test("Should return minimum item", () => {
  const arr = [4, 6, 34, 12, 1, 5];
  const h = new MinHeap();

  for (let item of arr) {
    h.push(new HeapItem(item));
  }

  let min = h.pop();
  expect(min.priority).toBe(1);
  min = h.pop();
  expect(min.priority).toBe(4);
});

test("Should order items properly", () => {
  const arr = [4, 6, 34, 12, 1, 5];
  const h = new MinHeap();

  for (let item of arr) {
    h.push(new HeapItem(item));
  }
  expect(h.peek().priority).toBe(1);
  h.pop();
  expect(h.peek().priority).toBe(4);
  h.push(new HeapItem(2));
  expect(h.peek().priority).toBe(2);
  expect(h.size()).toBe(6);
});

test("Should return last item", () => {
  const h = new MinHeap();
  h.push(new HeapItem(4));
  const min = h.pop();
  expect(min.priority).toBe(4);
});
