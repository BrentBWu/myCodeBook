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
    let firstNum, lastNum, lowNum = 0, highNum = nums.length - 1, mid;
    while(lowNum <= highNum) {
        mid = Math.floor(lowNum + (highNum - lowNum) / 2);
        if(nums[mid] >= target) {
            highNum = mid - 1;
        } else {
            lowNum = mid + 1;
        }
    }
    console.log(nums[lowNum]);
    if(nums[lowNum] !== target) return [-1, -1];
    firstNum = lowNum;
    lowNum = 0, highNum = nums.length -1;
    while(lowNum <= highNum) {
        mid = Math.floor(lowNum + (highNum - lowNum) / 2);
        if(nums[mid] > target) {
            highNum = mid - 1;
        } else {
            lowNum = mid + 1;
        }
    }
    lastNum = highNum;
    return [firstNum, highNum];
};
let nums =  [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums,target));