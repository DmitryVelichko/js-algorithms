// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. Задача на Arrays and hashing
// 2. Создаем мапу
// 3. Если map[target - nums[i]] есть, возвращаем массив индексов [map[target - nums[i]], i]
// Иначе - кладем в мапу индекс
// 4. Возвращаем пустой массив, если false
// Time: O(n), Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // O(n), O(n)
  const hash = {}
  for(let [index, num] of nums.entries()) {
        let complement = target - num
        if(hash[complement] === undefined) hash[num] = index
        else return [hash[complement], index]
  }
};