// 977. Squares of a Sorted Array
// Easy
// Topics
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n log n), O(1) or O(n)
// (for example, JavaScript's sort() often uses quicksort or mergesort,
// which can take up to O(n) space in worst case
// O(1) (if sorting is in-place) or O(n) (if extra space is required)

var sortedSquaresBrute = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums.sort((a, b) => a - b)
};

//2 pointers: заполняем новый массив большИм квадратом с конца массива, сравнивая квадраты чисел
// O(n), O(n)

var sortedSquares = function (nums) {
    const res = []
    let l = 0
    let r = nums.length - 1
    let index = nums.length - 1

    while (l <= r) {
        let leftSqr = nums[l] * nums[l]
        let rightSqr = nums[r] * nums[r]

        if (leftSqr > rightSqr) {
            res[index] = leftSqr
            l++
        } else {
            res[index] = rightSqr
            r--
        }
        index--
    }

    return res
}