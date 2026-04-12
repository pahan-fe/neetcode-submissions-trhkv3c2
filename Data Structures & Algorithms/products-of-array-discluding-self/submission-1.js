class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const zeros = []

        nums.forEach((el, i) => {
            if (el === 0) {
               zeros.push(i)
            }
        })

        if (zeros.length >= 2) {
            return new Array(nums.length).fill(0)
        }

        const full = nums.reduce((acc, curr) => {
            if (curr === 0) {
                return acc
            }
            return acc * curr
        }, 1)

        const result = []
        if (zeros.length === 1) {
            const result = new Array(nums.length).fill(0)
            result[zeros[0]] = full
            return result
        }

        nums.forEach(el => {
            result.push(full / el)
        })
        return result
    }
}
