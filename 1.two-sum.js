/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numsList = {};
    for(let i = 0; i < nums.length; i++) {
        numsList[i] = nums[i];
    }
    console.log(numsList,'list');
    nums.sort((a,b) => {
       return a - b
    })
    console.log(nums,'nums=====');
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    sum = nums[l] + nums[r];
    if (sum > target) {
      --r;
    } else if (sum < target) {
      ++l;
    } else {
        console.log([numsList[nums[l]], numsList[nums[r]]]);
      return [numsList[nums[l]], numsList[nums[r]]];
    }
  }
};
// @lc code=end
let nums = [3,2,4],
  target = 6;
twoSum(nums, target);
