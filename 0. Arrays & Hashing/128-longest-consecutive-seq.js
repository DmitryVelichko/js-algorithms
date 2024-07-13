// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
// Задача на arrays & hashing.
// Создаем set
// С помощью цилка for of ищем в сете минимальный элемент num-1
// во вложенном цикле while пока в сете есть num+1 обновляем currMax и currNum
// Вычисляем максимальный элемент (max, currMax) и возвращаем его
var longestConsecutive = function (nums) {
    let max = 0
    const set = new Set(nums)

    // Проходимся по сету и находим наименьший элемент num-1
    for (let num of set) {
        if (set.has(num - 1)) continue
        let currNum = num
        let currMax = 1
        // проходимся по сету пока там есть currNum+1
