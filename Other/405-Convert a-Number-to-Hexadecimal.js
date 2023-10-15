// 405. Convert a Number to Hexadecimal
// Easy
// 1.3K
// 204
// Companies
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

 

// Example 1:

// Input: num = 26
// Output: "1a"
// Example 2:

// Input: num = -1
// Output: "ffffffff"
 

// Constraints:

// -231 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    if (num == 0) return "0";
    
    if (num < 0) {
        num += Math.pow(2,32);
    }
    var res = "";
    
    while(num > 0) {
        var digit = num % 16;
        res = arr[digit] + res;
        num = Math.floor(num / 16);
    }
    return res;
};