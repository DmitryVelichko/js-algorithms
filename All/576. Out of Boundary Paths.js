// 576. Out of Boundary Paths
// Medium
// Topics
// Companies
// Hint
// There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

// Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

 

// Example 1:


// Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// Output: 6
// Example 2:


// Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
// Output: 12
 

// Constraints:

// 1 <= m, n <= 50
// 0 <= maxMove <= 50
// 0 <= startRow < m
// 0 <= startColumn < n

var findPaths = function(m, n, maxPath, i, j, memo = new Map()) {
    // ключ для хранения в кэше, основанный на текущих значениях maxPath, i и j
    const key = maxPath + ',' + i + ',' + j;
    
    // проверяем, есть ли уже результат в кэше (memoization) для этого ключа
    if (memo.has(key)) return memo.get(key);
    
    // проверяем, вышел ли путь за пределы сетки
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    
    // если maxPath равен 0 или путь вышел за пределы сетки, возвращаем 1, если вышел, иначе 0
    if (maxPath === 0 || isOutside) return +isOutside;
    
    // рекурсивно вычисляем количество путей, перемещаясь вверх, вниз, вправо и влево
    // и сохраняем результат в кэше
