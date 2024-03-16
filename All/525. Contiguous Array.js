// 525. Contiguous Array
// Solved
// Medium
// Topics
// Companies
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
    const hash = {};
    let max_length = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      if (current === 0) {
          // if the current element is 0, then we decrement the count
        count--;
