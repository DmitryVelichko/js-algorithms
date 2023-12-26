// 693. Binary Number with Alternating Bits
// Easy
// 1.3K
// 110
// Companies
// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

// Example 1:

// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101
// Example 2:

// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.
// Example 3:

// Input: n = 11
// Output: false
// Explanation: The binary representation of 11 is: 1011.
 

// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let bin = n.toString(2)

    for(let i=0;i<bin.length-1; i++) {
        if(bin[i] !== bin[i+1]) continue
        else return false
    }
    return true
};