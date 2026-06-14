class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []

        const backtrack = (key, index) => {
            result.push(key)

            for (let i = index; i < nums.length; i++) {
                backtrack([...key, nums[i]], i + 1)
            }
        }

        backtrack([], 0)

        return result
    }
}
