class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []

        const backtrack = (index, partSum, partArr) => {
            if (partSum === target) {
                result.push([...partArr])
                return
            }

            if (partSum > target) {
                return
            }

            for (let i = index; i < nums.length; i++) {
                partArr.push(nums[i])
                backtrack(i, partSum + nums[i], partArr)
                partArr.pop()
            }
        }

        backtrack(0, 0, [])

        return result
    }
}
