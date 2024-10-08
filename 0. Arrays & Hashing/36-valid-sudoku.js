// 36. Valid Sudoku
// Medium
// 8.8K
// 919
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 /**
 * 
 new Set()
 for
    for(j<board[i].length)
    cell === '.' ? continue

    row = '${row}, ${cell}'
    col = '${col}, ${cell}'
    box = '${i/3} ${j/3}, ${cell}'

    if(set.has(row/col/box)) false
    set.add(row/col/box)
return true

 */
 // O(9**2), O(9**2) {
    var isValidSudoku = function (board) {
        const set = new Set()
    
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const cell = board[i][j]
                if (cell === '.') continue
                const row = `row: ${i}, value: ${cell}`
                const col = `col: ${j}, value: ${cell}`
                const box = `box: ${Math.floor(i / 3)}, ${Math.floor(j / 3)} value: ${cell}`
    
                if (set.has(row) || set.has(col) || set.has(box)) return false
    
                set.add(row)
                set.add(col)
                set.add(box)
            }
        }
        return true
    };