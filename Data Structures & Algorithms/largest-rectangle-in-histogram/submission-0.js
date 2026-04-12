class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxSquare = 0

        for (let i = 0; i < heights.length; i++) {
            let width = 1
            let min = heights[i]
            for (let j = i; j < heights.length; j++) {
                const newMin = Math.min(min, heights[j])
                const newSquare = newMin * width

                maxSquare = Math.max(newSquare, maxSquare)
                min = newMin
                width++
            }
        }

        return maxSquare
    }
}
