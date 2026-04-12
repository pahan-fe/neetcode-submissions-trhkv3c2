class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const helper = position
            .map((el, i) => ({ car: el, time: speed[i] }))
            .toSorted((a, b) => b.car - a.car)
            .map(el => (target - el.car) / el.time)

        let prevTime = helper[0]
        let result = 1
        for (let i = 1; i < helper.length; i++) {
            if (helper[i] > prevTime) {
                prevTime = helper[i]
                result++
            }
        }

        return result

        // const times = position
        //     .map((el, i) => ({ car: el, time: speed[i] }))
        //     .toSorted((a, b) => b.car - a.car)
        //     .map(el => (target - el.car) / el.time)

        // const stack = []
        // for (let i = 0; i < times.length; i++) {
        //     if (!stack.length || times[i] > stack[stack.length - 1]) {
        //         stack.push(times[i])
        //     }
        // }

        // return stack.length
    }
}
