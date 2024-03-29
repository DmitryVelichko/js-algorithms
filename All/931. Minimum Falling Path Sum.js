// 931. Minimum Falling Path Sum
// Solved
// Medium
// Topics
// Companies
// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

 

// Example 1:


// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Output: 13
// Explanation: There are two falling paths with a minimum sum as shown.
// Example 2:


// Input: matrix = [[-19,57],[-40,-5]]
// Output: -59
// Explanation: The falling path with a minimum sum is shown.
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number}
 */

var minFallingPathSum = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    
    let prevRow = matrix[0].slice(); // Initialize with the first row
    
    for (let r = 1; r < M; r++) {
        const currRow = [];
        for (let c = 0; c < N; c++) {
            const curr = matrix[r][c];
            const top = curr + prevRow[c];
            const topL = curr + (prevRow[c - 1] || Infinity);
            const topR = curr + (prevRow[c + 1] || Infinity);
            currRow[c] = Math.min(top, topL, topR);
        }
        prevRow = currRow; // Update the previous row with the current row
    }
    
    return Math.min(...prevRow);
};