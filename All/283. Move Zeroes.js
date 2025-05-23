// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n), O(1)
var moveZeroes = function (nums) {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
};
// Follow up: minimize total number of swaps
function moveZeroes(nums) {
    let insertPos = 0;

    // First pass: move non-zeroes forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    // [1,3,12,3,12]

    // Second pass: fill the rest with zeroes
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
}