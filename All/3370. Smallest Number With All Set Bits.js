// 3370. Smallest Number With All Set Bits
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only 
// set bits



// Example 1:

// Input: n = 5

// Output: 7

// Explanation:

// The binary representation of 7 is "111".

// Example 2:

// Input: n = 10

// Output: 15

// Explanation:

// The binary representation of 15 is "1111".

// Example 3:

// Input: n = 3

// Output: 3

// Explanation:

// The binary representation of 3 is "11".



// Constraints:

// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number}
 */
// O(b*k), O(b)
var smallestNumber = function (n) {
    let i = n;
    while (true) {
        let binary = i.toString(2);
        if (!binary.includes('0')) {
            return i;
        }
        i++;
    }
};

/**
 * @param {number} n
 * @return {number}
 */
// O(log n), O(1)
var smallestNumber = function (n) {
    let k = 0; // Number of bits in n
    let temp = n;

    // Count the number of bits in the binary representation of n
    while (temp > 0) {
        k++;
        temp >>= 1; // Right-shift to count bits
    }

    // Compute the smallest number with all bits set (2^k - 1)
    let result = (1 << k) - 1;

    // If result is smaller than n, increase k to get the next all-bits-set number
    if (result < n) {
        k++;
        result = (1 << k) - 1;
    }

    return result;
};