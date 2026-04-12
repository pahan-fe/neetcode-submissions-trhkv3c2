class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = []

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]
            result.push(`${str.length}#${str}`)
        }

        return result.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        
        let i = 0
        let j = 0
        while (j < str.length) {
            if (str[j] === '#') {
                const len = parseInt(str.slice(i, j), 10)
                const end =  j + 1 + len
                result.push(str.slice(j + 1, end))
                i = end
                j = end
            }
            j++
        }

        return result
    }
}
