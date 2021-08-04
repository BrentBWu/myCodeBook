// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  let lower = lowerBand(nums, target);
  let upper = upperBand(nums, target) - 1;
  if (lower === nums.size() || nums[lower] != target) {
    return [-1, -1];
  }
  return [lower, upper];
  function lowerBand(nums, target) {
    let l = 0,
      r = nums.length - 1,
      mid;
    while (l <= r) {
      mid = parseInt(l + (r - l) / 2);
      if (nums[mid] >= target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
  function upperBand(nums, target) {
    let l = 0,
      r = nums.length - 1,
      mid;
    while (l <= r) {
      mid = parseInt(l + (r - l) / 2);
      if (nums[mid] >= target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
};
let nums =  [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums,target));