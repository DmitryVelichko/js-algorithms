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
