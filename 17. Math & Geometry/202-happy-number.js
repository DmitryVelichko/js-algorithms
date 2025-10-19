// 202. Happy Number
// Solved
// Easy
// Topics
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.



// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
/**
   slow, fast to find cycle, separate function for squaring(digit = n % 10 (19 -> 9), n / 10 (19 -> 1))
 */
//The number of digits in a number \U0001d45b n in base 10 is approximately log ⁡ 10 ( \U0001d45b ) log 10 ​ (n). For example, a number like 9876 has 4 digits, and you can find this by taking log ⁡ 10 ( 9876 ) ≈ 3.99 log 10 ​ (9876)≈3.99.
//O(log n) base 10 or 2 doesn't matter, in big O it's abstracted away, Space: O(1)
function sumOfSquares(n) {
    let sum = 0;
    while (n) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
var isHappy = function (n) {

    let slow = n;
    let fast = n;

    do {
        slow = sumOfSquares(slow); // один шаг вперед
        fast = sumOfSquares(sumOfSquares(fast)); // два шага вперед
    } while (slow !== fast)
    return slow === 1;
};