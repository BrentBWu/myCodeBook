// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// Constraints:

// 0 <= x <= 231 - 1
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if(x===0) return x;
  let left = 1, right = x, sqrt, mid;
  while(left <= right) {
      mid = parseInt(left + (right - left) / 2); // l + r可能会溢出
      sqrt = x / mid;
      if(sqrt === mid) {
          return mid;
      } else if (sqrt > mid) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return parseInt(right);
//   if (a == 0) return a;
//   let l = 1,
//     r = a,
//     mid,
//     sqrt;
//   while (l <= r) {
//     mid = parseInt(l + (r - l) / 2);
//     sqrt = a / mid;
//     if (sqrt == mid) {
//       return parseInt(mid);
//     } else if (mid > sqrt) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return parseInt(r);
};
const a = 4;
console.log(mySqrt(a));
