class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ''
        }

        const helper2 = {}
        for (let i = 0; i < t.length; i++) {
            if (!(t[i] in helper2)) {
                helper2[t[i]] = 0
            }
            helper2[t[i]]++
        }

        let need = new Set(t).size
        let have = 0
        let indexes = []
        let minLength = s.length
        let left = 0
        const helper = {}

        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in helper)) {
                helper[s[i]] = 0
            }
            helper[s[i]]++

            if (helper[s[i]] === helper2[s[i]]) {
                have++
            }

            if (have >= need) {
                while (have >= need) {
                    if (helper[s[left]] === helper2[s[left]]) {
                        have--
                    }

                    helper[s[left]]--
                    left++
                }

                if (minLength >  i - left) {
                   indexes = [left - 1, i + 1] 
                   minLength = i - left
                }
            }
        }

        if (!indexes.length) {
            return ''
        }

        return s.slice(indexes[0], indexes[1])
    }
}
