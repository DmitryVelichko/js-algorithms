// 347. Top K Frequent Elements
// Medium


// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.


// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 /**
    // дан массив чисел, вернуть массив k чисел, которые
    встречаются чаще всего 

    // O(n), O(n)

    // Bucket sort 

    hash = {}
    res = []
    arr = [[], [], []]

    for (num of nums) - считаем частотность чисел - {число 5 : 1 раз,}
                                                            0    1 
    for (num in hash) - добавляем в arr числа по частоте- [[ ], [5]]

    for в обратном направлении
        for по arr[i]
            res.push(num);
            длина res === k ? return res
            
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