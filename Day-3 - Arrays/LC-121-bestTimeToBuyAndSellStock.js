/*
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Constraints - 
    - Buy Date < Sell Date
*/
var maxProfit = function(prices) {
    let buyDate = 0;
    let sellDate = 1;
    let maxP = 0;

    while(sellDate < prices.length){
        if(prices[sellDate] > prices[buyDate]){
            let profit = prices[sellDate] - prices[buyDate];
            maxP = Math.max(maxP, profit);
        }
        else{
            buyDate = sellDate;
        }
        sellDate++;
    }

    return maxP;
};