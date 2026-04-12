class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stackLeft = []
        const boundsLeft = []
        for (let i = 0; i < heights.length; i++) {
            while (heights[i] <= heights[stackLeft[stackLeft.length - 1]]) {
                stackLeft.pop()
            }
            boundsLeft[i] = stackLeft.length !== 0 ? stackLeft[stackLeft.length - 1] : -1
            stackLeft.push(i)
        }

        const stackRight = []
        const boundsRight = []
        for (let i = heights.length - 1; i >= 0; i--) {
            while (heights[i] <= heights[stackRight[stackRight.length - 1]]) {
                stackRight.pop()
            }
            boundsRight[i] = stackRight.length !== 0 ? stackRight[stackRight.length - 1] : heights.length
            stackRight.push(i)
        }

        const results = boundsLeft.map((left, i) => {
            const right = boundsRight[i]
            return (right - left - 1) * heights[i]
        })

        return Math.max(...results)

        // let maxSquare = 0

        // for (let i = 0; i < heights.length; i++) {
        //     let width = 1
        //     let min = heights[i]
        //     for (let j = i; j < heights.length; j++) {
        //         const newMin = Math.min(min, heights[j])
        //         const newSquare = newMin * width

        //         maxSquare = Math.max(newSquare, maxSquare)
        //         min = newMin
        //         width++
        //     }
        // }

        // return maxSquare
    }
}
