/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0, count = 0, indexCount = 0;
    for (let i = 1; i < nums.length; i++) {
        if(nums[index] === nums[i]) {
            indexCount++;
            if(indexCount<2) {
                count++;
            }
        } else {
            nums[count + 1] = nums[i];
            indexCount = 0;
            index = i;
            count++;
        }
    }
    return count + 1;
};
// @lc code=end
let nums = [1,1,1,2,2,3]
let nums1= [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(nums));
