// 509. Fibonacci Number
// Solved
// Easy
// Topics
// Companies
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).



// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Constraints:

// 0 <= n <= 30


/**
 * @param {number} n
 * @return {number}
 */
// O(2^n), O(n) recursion
var fib = function (n) {
    // if(n <= 0) return n
    if (n === 0) return 0
    if (n === 1) return 1

    return fib(n - 1) + fib(n - 2)
};

// O(n), O(n) = Memoized recursion
var fib = function (n, memo = {}) {
    if (n in memo) return memo[n]; // Return cached result
    if (n <= 1) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};
// O(n), O(1) - Iterative approach
var fib = function (n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        // let temp = a + b;
        // a = b;
        // b = temp;

        [a, b] = [b, a + b]
    }
    return b;
};
// Binet formula: O(1), O(1) but Less precise for large values of n due to floating-point errors.
var fib = function (n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    return Math.round((Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5));
};
