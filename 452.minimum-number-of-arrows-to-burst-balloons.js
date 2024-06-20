/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */
/* - set count number starting from 1
-  sort points intervals by ascending order
- iterate intervals
    - if current object's end time is less than the next point's start time, count plus plus and set the next point as the current object
    - else the next point moves to the next.
- return count number
*/
// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let count = 1;
    points.sort((a, b) => {
        return a[1] - b[1]
    })
    let prev = points[0]
    for (let i = 1; i < points.length; i++) {
        if(prev[1] < points[i][0]) {
            count++;
            prev = points[i];
        }
    }
    return count;
};
// @lc code=end
let points = [[10,16],[2,8],[1,6],[7,12]]
console.log(findMinArrowShots(points));
