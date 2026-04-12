class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1
        const lastIndex = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left

            if (nums[mid] === target) {
                return mid
            }

            if (nums[mid] > nums[lastIndex]) {
                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1

                } else {
                    left = mid + 1
                }
            } else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }

        return -1
    }
}
