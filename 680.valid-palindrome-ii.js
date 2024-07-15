/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */
/* 
two pointers and recursion
- set left and right pointers
- iterate the array and judge whether s[l] == s[r]
    - if true, move r--, l--
    - if false, check l+1 and r-1, create a function to iterate array to check palindrome
*/
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if(s[l] === s[r]) {
            l++;
            r--;
        } else {
           if(checkPalindrome(s, l+ 1, r) || checkPalindrome(s, l, r - 1)) {
            return true;
           } else {
            return false;
           }
        }
    }
    return true;
};

var checkPalindrome = function(s, l, r) {
    while (l < r) {
        if(s[l] === s[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }
    return true;
}
// @lc code=end
let s = "aba"
console.log(validPalindrome(s));

//TODO: What's wrong with this?
// var validPalindrome = function(s) {
//     let l = 0, r = s.length - 1;
//     while (l <= r) {
//         if(s[l] === s[r]) {
//             l++;
//             r--;
//         } else {
//             if(s[l]!==s[r-1] && s[l + 1]!==s[r]) {
//                 return false;
//             } else  {
//                 return checkPalindrome(s, l+1, r) || checkPalindrome(s, l, r-1);
//             }
//         }
//     }
// };
