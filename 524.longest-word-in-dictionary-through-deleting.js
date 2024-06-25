/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let output = '';
    dictionary.sort();
    for(let i=0; i<dictionary.length; i++) {
        let j=0;
        for(let m=0; j<dictionary[i].length && m < s.length;) {
            if(dictionary[i][j] === s[m]) {
                j++;
            }
            m++;
        }
        if(j === dictionary[i].length) {
                output = output.length >= dictionary[i].length && output ? output : dictionary[i];
        }
    }
    return output;
};
// @lc code=end
let s = "abce", dictionary = ["abe","abc"]
console.log(findLongestWord(s, dictionary),'output')