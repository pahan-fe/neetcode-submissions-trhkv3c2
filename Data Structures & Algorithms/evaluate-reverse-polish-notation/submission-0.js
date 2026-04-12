class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const helper = {
            "+": (a, b) => Number(a) + Number(b),
            "-": (a, b) => Number(a) - Number(b),
            "*": (a, b) => Number(a) * Number(b),
            "/": (a, b) => Math.trunc(Number(a) / Number(b))
        }
        const stack = []

        for (let value of tokens) {
            if (value in helper) {
                const last = stack.pop();
                const first = stack.pop();

                const result = helper[value](first, last)
                stack.push(result)
            } else {
                stack.push(value)
            }
        }

        return stack[0]
    }
}
