/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pos = m + n - 1;
    m--;
    n--;
    while(m>=0 && n >=0) {
        nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
        console.log(nums1, n, m,'nums1 n m');
    }
    while(n>=0) {
        nums1[pos--] = nums2[n--]
    }
    console.log(nums1);
    return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);