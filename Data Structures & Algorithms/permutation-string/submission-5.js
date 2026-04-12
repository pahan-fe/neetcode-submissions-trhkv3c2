class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1helper = {}

        for (let word of s1) {
            if (!(word in s1helper)) {
                s1helper[word] = 0
            }
            s1helper[word]++
        }

        let left = 0
        const s2Helper = {} 
        for (let i = 0; i < s2.length; i++) {
            if (!(s2Helper[s2[i]])) {
                s2Helper[s2[i]] = 0
            }
            s2Helper[s2[i]]++

            if (i - left >= s1.length) {
                s2Helper[s2[left]]--
                left++
            }

            let result = true
            for (let word in s1helper) {
                if (s1helper[word] !== s2Helper[word]) {
                    result = false
                }
            }

            if (result) {
                return true
            }
        }

        return false
    }
}
