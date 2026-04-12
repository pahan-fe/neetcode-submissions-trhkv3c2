class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

       const helper = {}
       for (let i = 0; i < s.length; i++) {
            const sValue = s[i]
            const tValue = t[i]

            if (!(sValue in helper)) {
                helper[sValue] = 1
            } else {
                helper[sValue]++
            }
            if (!(tValue in helper)) {
                helper[tValue] = -1
            } else {
                helper[tValue]--
            }
       }

       return Object.values(helper).every(el => el === 0)


        // if (s.length !== t.length) {
        //     return false
        // }

        // const helperS1 = {}
        // for (let el of s) {
        //     if (el in helperS1) {
        //         helperS1[el]++
        //     } else {
        //         helperS1[el] = 1
        //     }
        // }

        // const helperS2 = {}
        // for (let el of t) {
        //     if (el in helperS2) {
        //         helperS2[el]++
        //     } else {
        //         helperS2[el] = 1
        //     }
        // }

        // for (let key of Object.keys(helperS1)) {
        //     if (!(key in helperS2) || helperS1[key] !== helperS2[key]) {
        //         return false
        //     }
        // }

        // return true






        // if (s.length !== t.length) {
        //     return false
        // }

        // const sortedS = [...s].sort()
        // const sortedt = [...t].sort()

        // return sortedS.join(',') === sortedt.join(',')
    }
}
