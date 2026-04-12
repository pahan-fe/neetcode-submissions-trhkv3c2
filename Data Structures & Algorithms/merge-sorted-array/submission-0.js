class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let first = m - 1;
        let second = n - 1;
        let last = nums1.length - 1;

        while (first >= 0 || second >= 0) {
            const firstEl = nums1[first]
            const secondEl = nums2[second]

            if (first < 0) {
                nums1[last] = secondEl
                last--
                second--
                continue
            }
            if (second < 0) {
                nums1[last] = firstEl
                last--
                first--
                continue
            }

            if (firstEl > secondEl) {
                nums1[last] = firstEl
                first--
            } else {
                nums1[last] = secondEl
                second--
            }

            last--
        }
    }
}
