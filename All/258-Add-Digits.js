// 258. Add Digits
// Easy
// 4.5K
// 1.9K
// Companies
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1
 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
/**
The digital root of a number can be computed with the formula:

If num is 0, the result is 0.
If num is divisible by 9, the result is 9.
Otherwise, the result is num % 9. */

var addDigits = function (num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};



function addDigits(num) {
    while (num >= 10) {  // Continue until num is a single digit
        let sumDigits = 0;
        while (num > 0) {
            sumDigits += num % 10;  // Add the last digit of num to sumDigits
            num = Math.floor(num / 10);  // Remove the last digit from num
        }
        num = sumDigits;  // Update num to the sum of its digits
    }
    return num;
}