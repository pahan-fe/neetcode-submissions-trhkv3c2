class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0
        let left = 0

        for (let right = 1; right < prices.length; right++) {
            if (prices[left] > prices[right] && left < right) {
                left = right
            } else {
                result = Math.max(result, prices[right] - prices[left])
            }
        }

        return result
    }
}
