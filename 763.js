/**
 * @param {string} s
 * @return {number[]}
 * 
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.

 */
 var partitionLabels = function(s) {
     let lastNumArr = [];
     let output = [];
    for(let i = 0; i<s.length; i++) {
        for(let l = i; l<s.length; l++) {
            if(s[i] === s[l]) {
                lastNumArr[i] = l+1;
            }
        }
    }
    console.log(lastNumArr,'lastNumArr');
    // 拿到所有元素最后出现位置的集合（下标+1）
    let lastNumPre = 1;
    let left = 0;
    for(let i = 0; i<lastNumArr.length;i++) {
        // console.log(lastNumPre);
        // console.log(lastNumArr[i]);
        // console.log(i);
        if(lastNumArr[i]>lastNumPre) {
            lastNumPre = lastNumArr[i];
        }
        if(i+1 === lastNumPre) {
            outputNum = lastNumPre - left;
            output.push(outputNum);
            left = lastNumPre;
        };
    }
    return output;
};

console.log(partitionLabels("eaaaabaaec"));