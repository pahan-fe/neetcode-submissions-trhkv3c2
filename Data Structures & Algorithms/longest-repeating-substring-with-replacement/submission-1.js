class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let result = 0;
        let count = {};

        for (let right = 0; right < s.length; right++) {
            if (!count[s[right]]) {
                count[s[right]] = 0
            }
            count[s[right]]++

            maxFreq = Math.max(maxFreq, count[s[right]]);
            while ((right - left + 1) - maxFreq > k) {
                count[s[left]]--
                left++
            }

            result = Math.max(result, (right - left + 1))
        }

        return result;
    }
}
