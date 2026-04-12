class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        const helper = {}
        let maxLength = 0

        for (let right = 0; right < s.length; right++) {
            if (s[right] in helper) {
                left = Math.max(helper[s[right]] + 1, left)
            }

            helper[s[right]] = right
            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength
    }
}
