/**
 * Notes.
 * Insertion sort and bubble sort are good for lists that are
 * almost sorted.
 *
 * Also since swaps are minimal great for when swaps are
 * costly.
 */

// O(n^2) stable & in-place
export function insertionSort(arr) {
  if (!arr || !arr.length) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    let current = i;

    while (current > 0 && arr[current] < arr[current - 1]) {
      let temp = arr[current];
      arr[current] = arr[current - 1];
      arr[current - 1] = temp;
      // make sure the number before is still good after change
      current--;
    }
  }

  return arr;
}

// O(n^2) stable & in-place
export function bubbleSort(arr) {
  if (!arr) return [];
  const n = arr.length;

  // reduce the range on each
  // iteration since the largest would
  // have bubbled to the end on each
  // cycle
  for (let i = n; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    // if no swaps occured than arr must be sorted
    if (!swapped) return arr;
  }
  return arr;
}

// O(n^2) non-stable & in-place
// always cycles through entire arr
export function selectionSort(arr) {
  if (!arr) return [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // start with assuming the first item is the smallest
    let minIndex = i;
    // look for smallest number starting from i
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// O(nlog(n)), stable, not in-place
// Requires more memory than quicksort
// and memory mgmt of arrays
export function mergeSort(arr) {
  if (!arr) return [];
  const n = arr.length;

  // base case;
  if (n <= 1) return arr;

  // split arr and call mergeSort
  const midpoint = Math.floor(n / 2);
  const leftSide = mergeSort(arr.slice(0, midpoint));
  const rightSide = mergeSort(arr.slice(midpoint));

  const res = [];
  let leftPtr = 0,
    rightPtr = 0;

  while (leftPtr < midpoint || rightPtr < n - midpoint) {
    if (leftPtr === midpoint) {
      // leftSide is empty
      res.push(rightSide[rightPtr]);
      rightPtr++;
    } else if (rightPtr === n - midpoint) {
      // rightSide is empty
      res.push(leftSide[leftPtr]);
      leftPtr++;
    } else if (leftSide[leftPtr] < rightSide[rightPtr]) {
      // left side has smaller value
      res.push(leftSide[leftPtr]);
      leftPtr++;
    } else {
      // right side has smaller value
      res.push(rightSide[rightPtr]);
      rightPtr++;
    }
  }
  return res;
}

// O(nlog(n)) stable
// There are different implementations of quicksort
// that offer varying degrees of performance, this
// implementation is relatively basic choosing the
// last element as pivot
export function quickSort(arr) {
  if (!arr) return [];
  throw new Error("Not implemented!");
}

// O(nlog(n)) unstable
export function heapSort(arr) {
  if (!arr) return [];
  throw new Error("Not implemented!");
}

// O(nlog(n)) unstable, can be stable
export function treeSort(arr) {
  if (!arr) return [];
  throw new Error("Not implemented!");
}

export function bucketSort(arr) {
  if (!arr) return [];
  throw new Error("Not implemented!");
}
