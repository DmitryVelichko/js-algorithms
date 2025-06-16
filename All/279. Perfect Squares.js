// 279. Perfect Squares
// Medium
// Topics
// Companies
// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.
 

// Constraints:

// 1 <= n <= 104

function numSquares(n) {
    // Создаем массив для хранения минимального количества квадратов для каждого числа до n
    const dp = Array(n + 1).fill(Infinity);
    // 0 можно представить без квадратов, поэтому начинаем с 0
    dp[0] = 0;
  
    // Проходим по всем числам от 1 до n
    for (let i = 1; i <= n; i++) {
      // Для каждого числа i мы проверяем квадраты чисел, которые меньше или равны i
      for (let j = 1; j * j <= i; j++) {
        // Обновляем dp[i], если находим меньшее количество квадратов, которые в сумме дают i
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  
    // Возвращаем минимальное количество квадратов для n
    return dp[n];
  }
  
  // Примеры использования
  console.log(numSquares(12)); // Вывод: 3 (12 = 4 + 4 + 4)
  console.log(numSquares(13)); // Вывод: 2 (13 = 4 + 9)
  