// 1295. Find Numbers with Even Number of Digits
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array nums of integers, return how many of them contain an even number of digits.



// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.


// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n*d) => O(n) ignoring the temporary space for the string conversion which is negligible for constant d, space: O(1)
var findNumbers = function (nums) {
    let res = 0; // Initialize the result counter
    for (let num of nums) {
        if (String(num).length % 2 === 0) { // Check if the length is even
            ++res;
        }
    }
    return res; // Return the result
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//  O(n) or O(n*d), d is the number of digits, 5 digits is constraint for task, O(1)
var findNumbers = function (nums) {
    let res = 0;
    for (let num of nums) {
        let digitCount = 0;
        while (num > 0) {
            num = Math.floor(num / 10);
            digitCount++;
        }
        if (digitCount % 2 === 0) {
            res++;
        }
    }
    return res;
};
