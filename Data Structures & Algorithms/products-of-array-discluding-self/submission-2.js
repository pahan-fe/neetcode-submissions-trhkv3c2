class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftTemp = 1
        let leftHelper = {}

        nums.forEach((el, i) => {
            leftHelper[i] = leftTemp
            leftTemp *= el
        })

        let rightTemp = 1
        let rightHelper = {}

        for (let i = nums.length - 1; i >= 0; i--) {
            rightHelper[i] = rightTemp
            rightTemp *= nums[i]
        }

        const result = []
        for (let i = 0; i < nums.length; i++) {
            result.push(leftHelper[i] * rightHelper[i])
        }

        return result
    }
}
