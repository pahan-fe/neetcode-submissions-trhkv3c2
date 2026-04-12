class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s.length) {
            return true
        }

        let left = 0
        let right = s.length - 1

        while (left < right) {
            while (left < right && this.isCorrectSymbol(s[left])) {
                left++
            }
             while (left < right && this.isCorrectSymbol(s[right])) {
                right--
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right--
        }

        return true
    }

    isCorrectSymbol(s) {
        return (s.toLowerCase().charCodeAt() < 97 || s.toLowerCase().charCodeAt() > 122)
            && (s.charCodeAt() < 48 || s.charCodeAt() > 57)
    }
}
