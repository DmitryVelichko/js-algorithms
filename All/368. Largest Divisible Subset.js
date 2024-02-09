// 368. Largest Divisible Subset
// Solved
// Medium
// Topics
// Companies
// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b); // 1. Сортируем массив
     const n = nums.length;
     const count = new Array(n).fill(1); // Количество элементов в подмножестве
     const prev = new Array(n).fill(-1); // Предыдущий индекс для каждого элемента
     let maxIndex = 0; // Индекс максимального элемента
   
     // 2. Находим максимальное подмножество для каждого элемента
     for (let i = 1; i < n; i++) {
       for (let j = 0; j < i; j++) {
         // Если текущий элемент делится нацело на nums[j]
         if (nums[i] % nums[j] === 0 && count[j] + 1 > count[i]) {
           count[i] = count[j] + 1; // Обновляем количество
           prev[i] = j; // Сохраняем индекс предыдущего элемента
         }
       }
       // Обновляем индекс максимального элемента, если нашли лучше
       if (count[i] > count[maxIndex]) {
         maxIndex = i;
       }
     }
   
     // 3. Восстанавливаем подмножество
     const result = [];
     while (maxIndex >= 0) {
       result.unshift(nums[maxIndex]);
       maxIndex = prev[maxIndex];
     }
   
     return result; // Возвращаем результат
   };