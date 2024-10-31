// 263. Ugly Number
// Solved
// Easy
// Topics
// Companies
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.



// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.


// Constraints:

// -231 <= n <= 231 - 1

// Уродливое число — это положительное число, которое можно разложить только на множители 2, 3 и/или 5. Например:

// 6 — это уродливое число, потому что его можно представить как 
// 2
// ×
// 3
// 2×3.
// 10 — это уродливое число, потому что его можно представить как 
// 2
// ×
// 5
// 2×5.
// 14 — не является уродливым, потому что в нем присутствует множитель 7, который не входит в список "разрешённых" множителей (2, 3 и 5).

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num <= 0) return false;
    while (num % 2 == 0) num /= 2;
    while (num % 3 == 0) num /= 3;
    while (num % 5 == 0) num /= 5;
    return num == 1;
};