/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */
/* sort the intervals by their end time
to make sure the smallest interval to be remained (greedy algorithm)
    iterate over the intervals, compare the first interval's end time with the next one;s start time,
    if end time > start time, overlap -> compare next one's start time
    if end time < start time, non overlap -> move pointer to the next one 
*/
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 * 
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        return a[1] - b[1];
    })
    let indexInterval = intervals[0], count = 0;
    for(let i = 1; i < intervals.length; i++) {
        if(indexInterval[1] > intervals[i][0]) {
            count++;
        } else {
            indexInterval = intervals[i];
        }
    }
    return count;
};
// @lc code=end

