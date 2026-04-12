class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = matrix.length - 1

        while (left <= right) {
            const middleIndex = Math.floor((right - left) / 2 + left)

            if (matrix[middleIndex][0] <= target && target <= matrix[middleIndex][matrix[middleIndex].length - 1]) {
                let innerLeft = 0
                let innerRight = matrix[middleIndex].length - 1

                while (innerLeft <= innerRight) {
                    const middleInnerIndex = Math.floor((innerRight - innerLeft) / 2 + innerLeft)

                    if (matrix[middleIndex][middleInnerIndex] === target) {
                        return true
                    } else if (matrix[middleIndex][middleInnerIndex] < target) {
                        innerLeft = middleInnerIndex + 1
                    } else {
                        innerRight = middleInnerIndex - 1
                    }
                }

                return false
            } else if (matrix[middleIndex][0] < target) {
                left = middleIndex + 1
            } else {
                right = middleIndex - 1
            }
        }

        return false
    }
}
