// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let i = 0, l = s.length - 1;
    let checkout_i =0, checkout_l =0;
    let way = 0;
    while(s[i]===s[l] && i<l) {
        i++;
        l--;
    }
    if(s[i]===s[l]) return true;
    if(s[i]===s[l-1]) {
        checkout_l = l;
        checkout_l--;
        checkout_i = i
        way = 0;
    } else {
        checkout_i = i;
        checkout_i++;
        checkout_l = l;
        way = 1;
    }
    while(s[checkout_i]===s[checkout_l] && checkout_i<checkout_l) {
        checkout_i++;
        checkout_l--;
    }
    if(s[checkout_i]===s[checkout_l]) {
        console.log('1232');
        return true;
    }
    if(checkout_i === checkout_l) {
        console.log('1');
        return true;
    } else {
        way===0?i++:l--;
        while(s[i]===s[l] &&i<l) {
            i++;
            l--;
        }
        if(s[i]===s[l]) return true;
        if(i===l){
            console.log('121');
            return true;
        } else {
            return false;
        }
    }
};

let s = "abc"
console.log(validPalindrome(s));