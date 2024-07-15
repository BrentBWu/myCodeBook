/**
 * @param {number[]} nums
 * @param {string} target
 **/
// binary search
/* 
- use two function findleft and findright to find the left and right element which is equal to target
- is left < right and each elements is equal to target
- return [left, right]
- otherwise return false.
*/
function searchRange(nums, target) {
    function findLeft(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    function findRight(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }

    let leftIdx = findLeft(nums, target);
    let rightIdx = findRight(nums, target);

    // Ensure that the target exists at the indices found
    if (leftIdx <= rightIdx && nums[leftIdx] === target && nums[rightIdx] === target) {
        return [leftIdx, rightIdx];
    } else {
        return [-1, -1];
    }
}

// Example usage
const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
console.log(searchRange(nums1, target1)); // Output: [3, 4]

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(searchRange(nums2, target2)); // Output: [-1, -1]

