class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        const sortedNums = nums.toSorted((a, b) => a - b)

        for (let left = 0; left < sortedNums.length - 2; left++) {
            if (left !== 0 && sortedNums[left] === sortedNums[left - 1]) {
                continue
            }

            let middle = left + 1
            let right = sortedNums.length - 1

            while (middle < right) {
                const curSum = sortedNums[left] + sortedNums[middle] + sortedNums[right]

                if (curSum === 0) {
                    result.push([sortedNums[left], sortedNums[middle], sortedNums[right]])
                    
                    middle++
                    right--

                    while (middle < right && sortedNums[middle] === sortedNums[middle - 1]) {
                        middle++
                    }
                    while (middle < right && sortedNums[right] === sortedNums[right + 1]) {
                        right--
                    }
                } else if (curSum < 0) {
                    middle++
                } else if (curSum > 0) {
                    right--
                }
            }
        }

        return result
    }
}
