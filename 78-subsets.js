// 78. Subsets

// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums, depth = 0, subset = [], results = []) {
    if (depth === nums.length) {
        results.push(subset)
    } else {
        subsets(nums, depth + 1, subset, results)
        subsets(nums, depth + 1, [...subset, nums[depth]], results)
    }
    return results
};