// 35. Search Insert Position
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(log n), O(1)
var searchInsert = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m
        else if (nums[m] > target) r = m - 1
        else l = m + 1
    }
    return l
};