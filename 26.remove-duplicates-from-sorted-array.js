/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0, count = 0;
    for(let i=0; i < nums.length; i++) {
        if(nums[i] != nums[index]) {
            index = i;
            count++;
            nums[count] = nums[index];
        }
    }
    return count+1;
};

let nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums), 'answer');