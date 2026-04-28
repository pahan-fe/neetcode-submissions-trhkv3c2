class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0

        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while (slow !== fast)

        slow = 0

        do {
            slow = nums[slow]
            fast = nums[fast]
        } while (slow !== fast)

        return slow
    }
}
