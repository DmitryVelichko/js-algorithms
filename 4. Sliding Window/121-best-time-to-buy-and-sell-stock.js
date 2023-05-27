// 121. Best Time to Buy and Sell Stock
// Easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
// Задача на sliding window
// 1 Создаем minValue=Infinity и maxProfit=0
// 2 В цикле обновляем minValue, вычисляя ее минимальное значение при сравнении с числом в массиве
// 3 В цикле обновляем maxProfit, вычисляя его максимальное значение при сравнении с числом в массиве минус minValue
// 4 Возвращаем maxProfit
// Time: O(n), space: O(1)
var maxProfit = function (prices) {
    let minValue = Infinity
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minValue)
    }
    return maxProfit
};