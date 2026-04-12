class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const helper = {}

        nums.forEach(el => {
            if (el in helper) {
                helper[el]++
            } else {
                helper[el] = 1
            }
        })

       return Object.entries(helper).toSorted((a,b) => a[1] - b[1]).slice(-k).map(([el]) => Number(el))
    }
}
