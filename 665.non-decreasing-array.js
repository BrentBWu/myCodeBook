/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */
/* 
greedy algorithm
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) return false;
    }
  }
  return count < 2;
};
// @lc code=end
let nums = [3, 4, 2, 3];
console.log(checkPossibility(nums));
