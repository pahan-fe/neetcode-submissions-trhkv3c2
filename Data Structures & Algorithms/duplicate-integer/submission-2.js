class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false
        const cache = new Set()

        nums.forEach(el => {
            if (cache.has(el)) {
                result = true
            }
            cache.add(el)
        })

        return result
    }
}
