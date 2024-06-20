/**
 * @param {string} s
 * @return {number[]}
 */
/*
- get each element's last appearance in the string, store those positions in an object
- loop the string
    - if the default ending is less than the index ending, compare the index starting and the default ending
        - if the default ending is less than the index ending, proving the default intervals is separated from the index intervals, and we find the gap. So we store the gap in the array. Update the default start and the default end.
        - else we update the default end to the index end.
*/
var partitionLabels = function(s) {
    let nums = {};
    let res = [];
    let start = 0, end = 0;
    for(let i = 0; i < s.length; i++) {
        nums[s[i]] = i;
    }
    end = nums[s[0]];
    console.log(end);
    console.log(nums,'nums');
    for(let i = 0; i < s.length; i++) {
        if(end < nums[s[i]]) {
           if(end > s.indexOf(s[i])) {
                end = nums[s[i]];
           } else {
            console.log(start, end, "start, end");
                res.push(end - start + 1);
                start = s.indexOf(s[i]);
                end = nums[s[i]];
                console.log(start, end, "start2, end2");
           }
        }
    }
    res.push(end - start + 1);
    console.log(res);
    return res;
};

let s = "eccbbbbdec"
partitionLabels(s);