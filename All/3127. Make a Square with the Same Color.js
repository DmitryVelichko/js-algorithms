// 3127. Make a Square with the Same Color
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a 2D matrix grid of size 3 x 3 consisting only of characters 'B' and 'W'. Character 'W' represents the white color, and character 'B' represents the black color.

// Your task is to change the color of at most one cell so that the matrix has a 2 x 2 square where all cells are of the same color.

// Return true if it is possible to create a 2 x 2 square of the same color, otherwise, return false.



// Example 1:



// Input: grid = [["B","W","B"],["B","W","W"],["B","W","B"]]

// Output: true

// Explanation:

// It can be done by changing the color of the grid[0][2].

// Example 2:


// Input: grid = [["B","W","B"],["W","B","W"],["B","W","B"]]

// Output: false

// Explanation:

// It cannot be done by changing at most one cell.

// Example 3:


// Input: grid = [["B","W","B"],["B","W","W"],["B","W","W"]]

// Output: true

// Explanation:

// The grid already contains a 2 x 2 square of the same color.



// Constraints:

// grid.length == 3
// grid[i].length == 3
// grid[i][j] is either 'W' or 'B'.

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
// O(1), O(1)
var canMakeSquare = function (grid) {
    // Helper function to check if a 2x2 square can be made uniform
    const canFormSquare = (r, c) => {
        // Collect the colors of the 2x2 subgrid
        const colors = [
            grid[r][c], grid[r][c + 1],
            grid[r + 1][c], grid[r + 1][c + 1]
        ];
        // Count occurrences of 'B' and 'W'
        const blackCount = colors.filter(color => color === 'B').length;
        const whiteCount = colors.filter(color => color === 'W').length;
        // Check if at most one change is needed
        return blackCount >= 3 || whiteCount >= 3;
    };

    // Check all four possible 2x2 subgrids
    return canFormSquare(0, 0) || canFormSquare(0, 1) || canFormSquare(1, 0) || canFormSquare(1, 1);
};
