import { insertionSort, selectionSort, bubbleSort } from "./sort.js";

test("insertion sort", () => {
  const unsortedArr = [3, 1, 4, 78, 5, 5, 6];
  expect(insertionSort(unsortedArr)).toEqual([1, 3, 4, 5, 5, 6, 78]);
});

test("insertion sort handles empty/falsey arr", () => {
  const unsortedArr = [];
  expect(insertionSort(unsortedArr)).toEqual([]);
  expect(insertionSort(null)).toEqual([]);
});

test("selection sort", () => {
  const unsortedArr = [3, 1, 4, 78, 5, 5, 6];
  expect(selectionSort(unsortedArr)).toEqual([1, 3, 4, 5, 5, 6, 78]);
});

test("bubble sort", () => {
  const unsortedArr = [3, 1, 4, 78, 5, 5, 6];
  console.log(bubbleSort(unsortedArr));
  expect(bubbleSort(unsortedArr)).toEqual([1, 3, 4, 5, 5, 6, 78]);
});

test("bubble sort handles empty/falsey arr", () => {
  const unsortedArr = [];
  expect(bubbleSort(unsortedArr)).toEqual([]);
  expect(bubbleSort(null)).toEqual([]);
});
