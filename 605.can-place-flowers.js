/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/*
1. plant flowers when it could be planted
2. iterate flowerbed start with i = 0
    - if flowerbed[i] = 0 and its previous one is zero or undefined(it means it is the first element) and
    its next one is zero or undefined(it means it is the last element), it can be planted.
    - set flowerbed[i] = 1 and n minus 1
    - flowerbed[i + 1] = 0 || undefined is equal to !flowerbed[i+1], similarly flowerbed[i-1]
    - if n <=0 return true
    - after iteration, return n<=0
*/

var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0 && !flowerbed[i-1] && !flowerbed[i+1]) {
            flowerbed[i] = 1;
            n--;
            if(n<=0) return true;
        }
    }
    return n<=0;
};
// @lc code=end

