class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const helper = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b)
        }
        const stack = []

        for (let value of tokens) {
            if (value in helper) {
                const last = stack.pop();
                const first = stack.pop();

                const result = helper[value](first, last)
                stack.push(Number(result))
            } else {
                stack.push(Number(value))
            }
        }

        return stack[0]
    }
}
