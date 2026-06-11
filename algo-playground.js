// 347. Top K Frequent Elements
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

 

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
    const res = [];
    const hash = {};

    // Bucket sort [[], [], []]
    const arr = Array.from({ length: nums.length + 1 }, () => []);

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1; //{number (777): 3 times}
    }
    //   0    1    2    3   индекс массива == частота числа
    // [[ ], [3], [2], [1]] число
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

// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
 
/**
 * @param {string} s
 * @return {number}
 */
/**
Sliding window: 2 pointers: set, l, max.
for loop across the whole string (r = 0): while right char exists in set ? delete left char from set, l++;
add right char to set, update max string size
*/
// O(n), O(n)

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};

// 258. Add Digits
// Easy
// 4.5K
// 1.9K
// Companies
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1
 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?
