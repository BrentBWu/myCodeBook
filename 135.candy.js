/**
 * @param {number[]} ratings
 * @return {number}
 */
function sumArray(arr) {
    let sum = 0;
     for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var candy = function(ratings) {
    let arr = [];
    for (let i = 0; i < ratings.length; i++) {
        arr.push(1);
    }
    for (let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i-1]) arr[i] = arr[i-1] + 1;
    }
    for (let i = ratings.length - 2; i>=0; i--) {
        if(ratings[i] > ratings[i+1]) arr[i] = Math.max(arr[i+1] + 1, arr[i]);
    }
    return sumArray(arr);
};