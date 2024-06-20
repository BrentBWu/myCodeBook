/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/*
- It's a greedy issue
- each step we make sure that we can sell it and get the profit, we add them all and we get the maximum profit.

we set index as the first element in the interval
Loop the intervals
Compare index and the prices[i]
if index is less than prices[i], prove it has profits, we store the profit in the max.
in any case, we set index to prices[i], and try to find the next profit.
return max as the result
*/
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let index = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if(index < prices[i]) {
            max += prices[i] - index;
        }
        index = prices[i]
    }
    return max;
};
// @lc code=end
prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));
