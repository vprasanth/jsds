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

// O(n^2) non-stable & in-place
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
