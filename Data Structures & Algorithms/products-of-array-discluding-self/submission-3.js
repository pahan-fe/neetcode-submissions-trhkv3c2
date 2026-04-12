class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []

        let leftTemp = 1
        for (let i = 0; i < nums.length; i++) {
            result.push(leftTemp)
            leftTemp *= nums[i]
        }

        let rightTemp = 1
        let rightHelper = {}

        for (let i = nums.length - 1; i >= 0; i--) {
            rightHelper[i] = rightTemp
            rightTemp *= nums[i]
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] *= rightHelper[i]
        }

        return result
    }
}
