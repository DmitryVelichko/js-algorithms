// // 74. Search a 2D Matrix

// 74. Search a 2D Matrix
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.



// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// O(log(m*n)), O(1) -  one binary search over a virtual 1D array
var searchMatrix = function (matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let l = 0
    let r = rows * cols - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let row = Math.floor(m / cols)
        let col = m % cols
        if (target > matrix[row][col]) {
            l = m + 1
        } else if (target < matrix[row][col]) {
            r = m - 1
        } else {
            return true
        }
    }
    return false
};