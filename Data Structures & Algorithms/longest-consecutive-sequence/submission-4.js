class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0
        }

        const numsSet = new Set()
        for (let i = 0; i < nums.length; i++) {
            numsSet.add(nums[i])
        }

        let max = 1
        for (let value of numsSet.values()) {
            if (!numsSet.has(value - 1)) {
                let current = value
                while (numsSet.has(current + 1)) {
                    current++
                }
                max = Math.max(max, current - value + 1)
            }
        }

        return max

        // let max = 1
        // let temp = 1
        // const sortedNums = nums.toSorted((a,b) => a - b)
        // let prevValue = sortedNums[0]

        // for (let i = 1; i < sortedNums.length; i++) {
        //     if (sortedNums[i] - prevValue > 1) {
        //         temp = 1
        //     }

        //     if (sortedNums[i] - prevValue === 1) {
        //         temp++
        //         max = Math.max(max, temp)
        //     }
        //     prevValue = sortedNums[i]
        // }

        // return max
    }
}
