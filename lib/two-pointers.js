export function dedupeSortedArr(arr) {
  if (!arr.length) return 0;
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1;
}

export function twoSumSorted(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];

    if (sum === target) {
      return [l, r];
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  return [];
}

export function longestSubStr(arr) {
  const seen = new Map();
  let [right, left] = [0, 0];
  let longest = 0;

  while (right < arr.length) {
    // record seen letter
    const curr = arr[right];
    seen.set(curr, seen.has(curr) ? seen.get(curr) + 1 : 1);

    // if duplicate char, move left to shift window
    while (seen.get(curr) > 1) {
      seen.set(curr, seen.get(curr) - 1);
      left++;
    }

    // record largest window size
    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
}
