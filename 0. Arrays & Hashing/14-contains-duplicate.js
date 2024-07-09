// Contains Duplicate

// Solution
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Time - O(n), space - O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // O(n), O(n)
    let hash = {}
    for(let num of nums) {
        if(hash[num] !== undefined) return true
        hash[num] = num
    }
    return false
};