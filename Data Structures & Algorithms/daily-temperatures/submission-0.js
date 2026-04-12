class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)
        const stack = [0]

        for (let i = 1; i < temperatures.length; i++) {
            while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                if (stack.length === 0) {
                    result[i] = 0
                    break
                }

                const stackIndex = stack.pop()
                result[stackIndex] = i - stackIndex
            }
            stack.push(i)
        }

        return result

        // const result = []

        // for (let i = 0; i < temperatures.length; i++) {
        //     for (let j = i; j < temperatures.length; j++) {
        //         if (temperatures[i] < temperatures[j]) {
        //             result.push(j - i)
        //             break
        //         }

        //         if (!result[i] && j === temperatures.length - 1) {
        //             result.push(0)
        //         }
        //     }
        // }

        // return result
    }
}
