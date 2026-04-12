class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        const last = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left

            if (nums[mid] > nums[last]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return nums[left]
    }
}
