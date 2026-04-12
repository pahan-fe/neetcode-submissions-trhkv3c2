class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0

        let left = 0
        let right = height.length - 1
        
        let leftMax = 0
        let rigthMax = 0
        while (left <= right) {
            if (leftMax < rigthMax) {
                leftMax = Math.max(leftMax, height[left])
                const water = leftMax - height[left]
                result += water > 0 ? water : 0
                left++
            } else {
                rigthMax =  Math.max(rigthMax, height[right])
                const water = rigthMax - height[right]
                result +=  water > 0 ? water : 0
                right--
            }
        }

        return result



        // let result = 0

        // const leftMax = []
        // let leftTemp = 0
        // for (let i = 0; i < height.length; i++) {
        //     const max = Math.max(leftTemp, height[i])
        //     leftTemp = max
        //     leftMax[i] = max
        // }
        
        // const rightMax = []
        // let rightTemp = 0
        // for (let i = height.length - 1; i >= 0; i--) {
        //     const max = Math.max(rightTemp, height[i])
        //     rightTemp = max
        //     rightMax[i] = max
        // }

        // for (let i = 0; i < height.length; i++) {
        //     const currLevel = Math.min(leftMax[i], rightMax[i]) - height[i]
        //     result += currLevel <= 0 ? 0 : currLevel
        // }

        // return result





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
