class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const helper = {}

        strs.forEach(str => {
            const keyArr = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                keyArr[str[i].charCodeAt(0) - 97]++
            }

            const key = keyArr.join()
            if (helper[key]) {
                helper[key].push(str)
            } else {
                helper[key] = [str]
            }
        })

        return Object.values(helper)
    }
}
