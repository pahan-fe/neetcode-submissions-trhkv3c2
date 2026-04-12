class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = []
        const queue = []

        for (let i = 0; i < nums.length; i++) {
            while (nums[i] > nums[queue[queue.length - 1]]) {
                queue.pop()
            }
            
            if (queue[0] < i - k + 1 ) {
                queue.shift()
            }

            queue.push(i)
            
            if (i >= k - 1) {
                result.push(nums[queue[0]])
            }
        }

        return result
    }
}
