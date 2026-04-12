class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!s.length) {
            return true
        }

        const helper = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        const stack = []
        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in helper)) {
                stack.push(s[i])
            } else {
                const el = stack.pop()
                if (helper[s[i]] !== el) {
                    return false
                }
            } 
        }

        return stack.length === 0
    }
}
