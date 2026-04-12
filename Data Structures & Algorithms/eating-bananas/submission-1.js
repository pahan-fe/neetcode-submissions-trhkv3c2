class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let result = 1

        let left = 1
        let right = Math.max(...piles)
        while (left <= right) {
            const middle = Math.floor((right - left) / 2) + left

            if (this.canEat(piles, h, middle)) {
                result = middle
                right = middle - 1
            } else {
                left = middle + 1
            }
        }

        return result
    }

    canEat(piles, h, currentH) {
        const currTime = piles.reduce((acc, curr) => {
            return acc + Math.ceil(curr / currentH)
        }, 0)

        return currTime <= h
    }
}
