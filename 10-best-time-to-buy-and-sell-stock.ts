/*
Solution

Profit from Buying - Selling - Re-buying Selling
and
Profit from Buying - Wait for Best price - Selling
are the same. That's why the logic behind this solution.
*/
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }
    let profit = 0;
    let buyingPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            profit += prices[i] - buyingPrice;

