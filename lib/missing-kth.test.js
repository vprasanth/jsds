import { missingElement } from "./missing-kth.js";

const nums = [2, 3, 5, 9];

test("returns 1st missing element", () => {
  expect(missingElement(nums, 1)).toBe(4);
});

test("returns 2nd missing element", () => {
  expect(missingElement(nums, 2)).toBe(6);
});

test("returns 3rd missing element", () => {
  expect(missingElement(nums, 3)).toBe(7);
});

test("returns -1 when invalid index is sent", () => {
  expect(missingElement(nums, 0)).toBe(-1);
});

test("handles k-th larger than max in array", () => {
  expect(missingElement(nums, 5)).toBe(10);
});
