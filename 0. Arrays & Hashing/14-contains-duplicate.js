// 217. Contains Duplicate
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
* Вернуть true если в массиве есть дубликат числа

// O(n), O(n)
*
* hashmap
*   iterate across arr:
*      num in hash? => true
*      Add num to hash
*   => false
*
 */
var containsDuplicate = function (nums) {
   // O(n), O(n)

   const hash = {}
   for (let num of nums) {
      if (hash[num] !== undefined) return true
      hash[num] = num
   }
   return false
};