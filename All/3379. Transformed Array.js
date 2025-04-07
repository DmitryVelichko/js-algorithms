// 3379. Transformed Array
// Attempted
// Easy
// Topics
// Companies
// Hint
// You are given an integer array nums that represents a circular array. Your task is to create a new array result of the same size, following these rules:

// For each index i (where 0 <= i < nums.length), perform the following independent actions:
// If nums[i] > 0: Start at index i and move nums[i] steps to the right in the circular array. Set result[i] to the value of the index where you land.
// If nums[i] < 0: Start at index i and move abs(nums[i]) steps to the left in the circular array. Set result[i] to the value of the index where you land.
// If nums[i] == 0: Set result[i] to nums[i].
// Return the new array result.

// Note: Since nums is circular, moving past the last element wraps around to the beginning, and moving before the first element wraps back to the end.



// Example 1:

// Input: nums = [3,-2,1,1]

// Output: [1,1,1,3]

// Explanation:

// For nums[0] that is equal to 3, If we move 3 steps to right, we reach nums[3]. So result[0] should be 1.
// For nums[1] that is equal to -2, If we move 2 steps to left, we reach nums[3]. So result[1] should be 1.
// For nums[2] that is equal to 1, If we move 1 step to right, we reach nums[3]. So result[2] should be 1.
// For nums[3] that is equal to 1, If we move 1 step to right, we reach nums[0]. So result[3] should be 3.
// Example 2:

// Input: nums = [-1,4,-1]

// Output: [-1,-1,4]

// Explanation:

// For nums[0] that is equal to -1, If we move 1 step to left, we reach nums[2]. So result[0] should be -1.
// For nums[1] that is equal to 4, If we move 4 steps to right, we reach nums[2]. So result[1] should be -1.
// For nums[2] that is equal to -1, If we move 1 step to left, we reach nums[1]. So result[2] should be 4.


// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n), O(n)
var constructTransformedArray = function (nums) {
    const result = [];
    const n = nums.length; // Store length of the array
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            // Move nums[i] steps to the right
            const newIndex = (i + nums[i] % n) % n; // Modulo to handle large steps
            result[i] = nums[newIndex];
        } else if (nums[i] < 0) {
            // Move abs(nums[i]) steps to the left
            const newIndex = (i + (nums[i] % n) + n) % n; // Modulo to handle negative index
            result[i] = nums[newIndex];
        } else {
            // If nums[i] == 0, just copy nums[i]
            result[i] = nums[i];
        }
    }
    return result;
};
