/* You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0,
        r = nums.length - 1, mid;
    while (l <= r) {
         mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === nums[mid - 1]) {
            if (mid % 2 === 0) {
                r = mid - 2;
            } else {
                l = mid + 1;
            }
        }
        else if (nums[mid] === nums[mid + 1]) {
            if (mid % 2 === 0) {
                l = mid + 2;
            } else {
                r = mid - 1;
            }
        } else {
            return nums[mid];
        }
    }
    // if (nums.length == 0) {
    //     return null
    // }
    // let l = 0, r = nums.length - 1, mid;
    // while (l <= r) {
    //     mid = Math.floor(l + (r -l)/2)
    //     if (nums[mid] == nums[mid -1]) {
    //         if (mid % 2 == 0) {
    //             r = mid - 2
    //         } else {
    //             l = mid + 1
    //         }
    //     } else if (nums[mid] == nums[mid + 1]){
    //         if (mid %2  == 0) {
    //             l = mid + 2
    //         } else {
    //             r = mid - 1
    //         }
    //     } else {
    //         return nums[mid]
    //     }
    // }
    // return -1
};

let nums = [3,3,7,7,10,11,11];
console.log(singleNonDuplicate(nums));
