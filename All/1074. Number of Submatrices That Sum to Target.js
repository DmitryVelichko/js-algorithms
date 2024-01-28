// 1074. Number of Submatrices That Sum to Target
// Hard
// Topics
// Companies
// Hint
// Given a matrix and a target, return the number of non-empty submatrices that sum to target.

// A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

// Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

// Example 1:


// Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
// Output: 4
// Explanation: The four 1x1 submatrices that only contain 0.
// Example 2:

// Input: matrix = [[1,-1],[-1,1]], target = 0
// Output: 5
// Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
// Example 3:

// Input: matrix = [[904]], target = 0
// Output: 0
 

// Constraints:

// 1 <= matrix.length <= 100
// 1 <= matrix[0].length <= 100
// -1000 <= matrix[i] <= 1000
// -10^8 <= target <= 10^8
var numSubmatrixSumTarget = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Precompute the cumulative sum for each row
    for (let row = 0; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }

    let count = 0;

    // Iterate through all possible pairs of columns
    for (let c1 = 0; c1 < cols; c1++) {
        for (let c2 = c1; c2 < cols; c2++) {
            const map = new Map();
            map.set(0, 1);
            let sum = 0;

            // Iterate through all rows and calculate the sum
            for (let row = 0; row < rows; row++) {
                sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);

                // Check if there is a subarray with sum equal to target
                count += map.get(sum - target) || 0;

                // Update the frequency of the current sum
                map.set(sum, (map.get(sum) || 0) + 1);
            }
        }
    }

    return count;
};