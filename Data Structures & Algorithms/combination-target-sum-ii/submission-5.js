class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = []
        const sortedCandidates = candidates.toSorted((a,b) => a-b)

        const backtrack = (index, partSum, partArr) => {
            if (partSum === target) {
                result.push([...partArr])
                return
            }

            if (partSum > target) {
                return
            }

            for (let i = index; i < sortedCandidates.length; i++) {
                const candidate = sortedCandidates[i]

                if (i > index && candidate === sortedCandidates[i-1]) {
                    continue
                };

                partArr.push(candidate)
                backtrack(i + 1, partSum + candidate, partArr)
                partArr.pop()
            }
        }

        backtrack(0, 0, [])

        return result
    }
}
