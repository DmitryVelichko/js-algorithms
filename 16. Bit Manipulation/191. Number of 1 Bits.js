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
var hammingWeight = function(n) {
    let res = 0;
    while (n) {
        n &= (n - 1); // Removes the least significant set bit
        res++;
    }
    return res;
};



