/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    function compareNumbers(a, b) {
        return a-b;
    }
    g = g.sort(compareNumbers);
    s = s.sort(compareNumbers);
    let count = 0;
    for(let j=0; j<g.length; j++) {
        for(let i = 0; i < s.length; i++) {
            if(g[j] <= s[i]) {
                s.splice(i, 1);
                count++;
                break;
            }
        }
    }
    return count;
};
// @lc code=end

