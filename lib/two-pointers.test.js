import {
  dedupeSortedArr,
  twoSumSorted,
  longestSubStr,
} from "./two-pointers.js";

test("dedupe arr", () => {
  const testArr = [0, 0, 1, 1, 1, 2, 2];
  expect(dedupeSortedArr(testArr)).toBe(3);
});

test("dedupe arr 2", () => {
  const testArr = [0, 1, 2, 2, 2, 2];
  expect(dedupeSortedArr(testArr)).toBe(3);
});

test("dedupe empty array", () => {
  const testArr = [];
  expect(dedupeSortedArr(testArr)).toBe(0);
});

test("dedupe with negative ints", () => {
  const testArr = [-1, -1, 2, 3, 3, 4, 4, 6, 7];
  expect(dedupeSortedArr(testArr)).toBe(6);
});

test("twoSumSorted", () => {
  const testArr = [2, 3, 4, 5, 8, 11, 18];
  const target = 8;
  expect(twoSumSorted(testArr, target)).toStrictEqual([1, 3]);
});

test("twoSumSorted returns [] when target can't be summed", () => {
  const testArr = [2, 3, 4, 6, 8, 11, 18];
  const target = 128;
  expect(twoSumSorted(testArr, target)).toStrictEqual([]);
});

test("twoSumSorted returns [] when arr is empty", () => {
  const testArr = [];
  const target = 0;
  expect(twoSumSorted(testArr, target)).toStrictEqual([]);
});

test("longestSubStr", () => {
  const testArr = "abccabcabcc".split("");
  const size = 3;
  expect(longestSubStr(testArr)).toEqual(size);
});

test("longestSubStr with empty array", () => {
  const testArr = "".split("");
  const size = 0;
  expect(longestSubStr(testArr)).toEqual(size);
});

test("longestSubStr with only duplicate char array", () => {
  const testArr = "".split("aaaaaaa");
  const size = 1;
  expect(longestSubStr(testArr)).toEqual(size);
});

test("longestSubStr with only 1 item array", () => {
  const testArr = "".split("x");
  const size = 1;
  expect(longestSubStr(testArr)).toEqual(size);
});
