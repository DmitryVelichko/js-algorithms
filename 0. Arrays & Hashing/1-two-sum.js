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
 * @param {number} k
 * @return {number[]}
 */
 /**
    дан массив чисел, вернуть массив k чисел, которые
    встречаются чаще всего 
    
    ( Bucket sort [[], [], []])

    hashmap
    массив результатов
    const arr = Array.from({ length: nums.length + 1 }, () => []); // [_, _,_, [1]]

    for по nums- считаем частотность чисел - {1:3}
   
    for по hash -добавляем в arr числа по частоте- [[ ], [2], [3]]

    for в обратно направлении
        for по массиву
            пушим в результат
            длина массива === k ? return res



 */
// O(n), O(n)
function topKFrequent(nums, k) {
    const hash = {};
    // Bucket sort [[], [], []]
    const arr = Array.from({ length: nums.length + 1 }, () => []); // [_, _,_, [1]]

    const res = [];

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1; //{1:3}
    }
    //   0    1    2   индекс массива == частота числа
    // [[ ], [2], [3]] число
    for (let num in hash) {
        arr[hash[num]].push(Number(num));
    }

    for (let i = arr.length - 1; i > 0; i--) {
        for (let num of arr[i]) {
            res.push(num);
            if (res.length === k) return res;
        }
    }
}