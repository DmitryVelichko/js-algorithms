// 238. Product of Array Except Self
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // Задача на Arrays and Hashing
 // 
 // T: O(n), S:O(1) result array не считается по условиям задачи
 var productExceptSelf = function(nums) {
    const res = [];
    let start = 1;
    let start2 = 1
    // Перемножаем между собой числа слева направо кроме последнего и пушим в массив
    for (let i = 0; i < nums.length; i++) {
        res.push(start)
        start = start * nums[i]
    }
        // Перемножваем между собой числа справо налево кроме первого и 
        // перемножваем с числами в массиве

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i]
        start2 = start2 * nums[i]
    }
    
    return res;
};