//leet code Q121

const MaxProfit = (prices) => {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = i;
    }
  }

  for (let i = min + 1; i < prices.length; i++) {
    if (prices[i] > prices[min]) {
      let sum = prices[i] - prices[min];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};
const prices = [7,6,4,3,1];
console.log(MaxProfit(prices));
