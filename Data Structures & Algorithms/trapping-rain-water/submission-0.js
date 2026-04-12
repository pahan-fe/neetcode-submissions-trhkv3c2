class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0

        const leftMax = []
        let leftTemp = 0
        for (let i = 0; i < height.length; i++) {
            const max = Math.max(leftTemp, height[i])
            leftTemp = max
            leftMax[i] = max
        }
        
        const rightMax = []
        let rightTemp = 0
        for (let i = height.length - 1; i >= 0; i--) {
            const max = Math.max(rightTemp, height[i])
            rightTemp = max
            rightMax[i] = max
        }

        for (let i = 0; i < height.length; i++) {
            const currLevel = Math.min(leftMax[i], rightMax[i]) - height[i]
            result += currLevel <= 0 ? 0 : currLevel
        }

        return result

        // let result = 0

        // for (let i = 1; i < height.length - 1; i++) {
        //     const maxLeft = Math.max(...height.slice(0, i))
        //     const maxRight = Math.max(...height.slice(i + 1, height.length))

        //     const currLevel = Math.min(maxLeft, maxRight) - height[i]
        //     result += currLevel <= 0 ? 0 : currLevel
        // }

        // return result
    }
}
