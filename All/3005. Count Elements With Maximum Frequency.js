// 3005. Count Elements With Maximum Frequency
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

 

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let hash = {}
    let res = 0

    for(let i=0; i<nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }

    const values = Object.values(hash)
    values.sort((a,b) => b - a)

    for(let val of values) {
        if(val === values[0]) {
            res += val
        }
    }

    return res
};