// 191. Number of 1 Bits
// Solved
// Easy
// Topics
// Companies
// Given a positive integer n, write a function that returns the number of 
// set bits
//  in its binary representation (also known as the Hamming weight).



// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.



// Constraints:

// 1 <= n <= 231 - 1


// Follow up: If this function is called many times, how would you optimize it?


/**
 * @param {number} n
 * @return {number}
 */
// while n: add to result remainder of n % 2, shift n's bits to the right by 1
// O(32) - т.к. 32 бита в n, O(1)
var hammingWeight = function (n) {
    let res = 0
    while (n) {
        res += n % 2
        n = n >> 1
    }
    return res
};

// Follow up: Bitwise Trick (Brian Kernighan’s Algorithm)
// Instead of iterating through all 32 bits, use an approach that only iterates over the set bits:
// How it works: n &= (n - 1) clears the least significant set bit of n. This reduces the number of
// iterations to the number of set bits.
// Time complexity: O(number of set bits), which is faster on average than O(32).
var hammingWeight = function (n) {
    let res = 0;
    while (n) {
        n &= (n - 1); // Removes the least significant set bit
        res++;
    }
    return res;
};


// Precomputed Lookup Table
// If you need to call the function many times, precompute the Hamming weights for all 8-bit numbers (0–255) and use them for lookup:

// Explanation:
// Store the Hamming weights of all 8-bit numbers in hammingWeightLookup.
// For a 32-bit number, break it into four 8-bit chunks and sum their Hamming weights using the lookup table.
// Space complexity: 
// O(256) for the lookup table.
// Time complexity: 
// O(4)=O(1) per call, as the input is processed in four steps.

// Precompute the Hamming weight for all 8-bit numbers
const hammingWeightLookup = new Array(256).fill(0).map((_, i) =>
    i.toString(2).split('1').length - 1
);

var hammingWeight = function (n) {
    let res = 0;
    for (let i = 0; i < 4; i++) {
        res += hammingWeightLookup[n & 0xff]; // Extract last 8 bits and lookup
        n >>= 8; // Shift right by 8 bits
    }
    return res;
};

