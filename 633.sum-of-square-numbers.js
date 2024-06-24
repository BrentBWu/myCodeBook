/**
 *   @param {String} c
 *   @return {boolean}
*/

/* 
 - Use tow points to calculate the square sum
  - use Math.sqrt and Math.floor to get max number and minimize the complexity
  - store all numbers that less than max into an array
  - set two points, left starting form the start time, right starting from the ending time, loop the array
    - if array[l] * array[l] + array[r] + array[r] < max, l++
    - if array[l] * array[l] + array[r] + array[r] > max, r--
    - else return true
*/

var judgeSquareSum = function(c) {
    let squareArray = [];
    let max = Math.floor(Math.sqrt(c));
    for (let i = 0; i <= max; i++) {
        squareArray.push(i);
    }
    let l = 0;
    let r = squareArray.length - 1;
    while (l <= r) {
        if(squareArray[l] * squareArray[l] + squareArray[r] * squareArray[r] > c) {
            r--;
        } else if (squareArray[l] * squareArray[l] + squareArray[r] * squareArray[r] < c) {
            l++;
        } else {
            return true;
        }
    }
    return false;
};

let c= 10000;
console.log(judgeSquareSum(c));