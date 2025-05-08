// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n^2), O(1)
var majorityElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n), O(1)
var majorityElement = function (nums) {
    let candidate = null
    let count = 0

    for (let num of nums) {
        if (count === 0) candidate = num

        if (num === candidate) count++
        else count--
    }
    return candidate
}


/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n), O(n)
var majorityElement2 = function (nums) {
    const hash = {}
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1
    }

    for (let num in hash) {
        if (hash[num] > Math.floor(nums.length / 2)) return Number(num)
    }
};