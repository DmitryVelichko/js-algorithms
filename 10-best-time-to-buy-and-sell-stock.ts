function maxProfit1(prices) {

    if (prices === null || prices.length === 0) {
        return 0;
    }
    let profit = 0;
 
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
            
        }
    }
    return profit;
};
    // T.C: O(N)
    // S.C: O(1)

