// 70. Climbing Stairs
// Solved
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // Если лестница состоит из одной или двух ступенек, ответ очевиден.
    if (n <= 2) {
        return n;
    }

    // Создаем массив для хранения количества способов добраться до каждой ступеньки.
    let dp = new Array(n + 1);

    // Инициализируем начальные значения.
    // До первой ступеньки можно добраться одним способом - одним шагом.
    // До второй ступеньки можно добраться двумя способами - двумя шагами по одной ступеньке или одним шагом сразу на две ступеньки.
    dp[1] = 1;
    dp[2] = 2;

    // Итерируемся начиная с третьей ступеньки.
    for (let i = 3; i <= n; i++) {
        // Количество способов добраться до текущей ступеньки равно сумме
        // способов добраться до предыдущей и предпредыдущей ступенек.
        dp[i] = dp[i - 1] + dp[i - 2];
    }

