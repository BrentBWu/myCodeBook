/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if(mid == target) {return true;}
        if()
    }
};
// @lc code=end

// let nums = [2,5,6,0,0,1,2], target = 0;
let nums = [2,5,6,0,0,1,2], target = 3;
search(nums, target);