// 504. Base 7
// Easy

// Given an integer num, return a string of its base 7 representation.

// Example 1:

// Input: num = 100
// Output: "202"
// Example 2:

// Input: num = -7
// Output: "-10"
 

// Constraints:

// -107 <= num <= 107

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) return '0';
    
    let temp = Math.abs(num);
    let res = '';
    
    while(temp !== 0){
        res = temp % 7 + res;
        temp = Math.floor(temp / 7);
    }
    
    return num >= 0 ? res : `-${res}`;
};