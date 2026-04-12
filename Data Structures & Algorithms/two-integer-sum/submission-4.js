class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = {}

        nums.forEach((el, i) => {
            cache[el] = i
        })

        for (let i = 0; i < nums.length; i ++) {
            const curr = target - nums[i]
            const index = cache[curr]
             
            if (index !== undefined && index !== i) {
                return [i, index]
            }
        }
    }
}
