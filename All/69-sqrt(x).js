// 69. Sqrt(x)
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1

// O(log x), O(1)

var mySqrt = function (x) {

    if (x === 0 || x === 1) return x;

    let start = 1, end = x, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (mid * mid > x) {
            end = mid - 1;
        } else if (mid * mid === x) {
            return mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
}

/**
 * @param {number} x
 * @return {number}
 */

//  O(√x), O(1)
var mySqrt = function (x) {

    if (x <= 1) return x
    for (let i = 2; i <= x; i++) {
        if (i * i === x) {
            return i
        } else if (i * i > x) {
            return i - 1;
        }
    }
}