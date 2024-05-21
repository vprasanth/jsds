export function missingElement(nums, k) {
  if (!k) return -1;

  const missingUpToIndex = (i) => {
    return nums[i] - nums[0] - i;
  };

  const size = nums.length;

  if (k > missingUpToIndex(size - 1)) {
    return nums[size - 1] + k - missingUpToIndex(size - 1);
  }

  let l = 0;
  let r = size - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (missingUpToIndex(mid) >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return nums[l - 1] + k - missingUpToIndex(l - 1);
}
