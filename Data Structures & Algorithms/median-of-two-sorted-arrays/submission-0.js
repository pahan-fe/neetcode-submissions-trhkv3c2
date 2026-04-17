class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const [arr1, arr2] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]
        const arr1Length = arr1.length;
        const arr2Length = arr2.length;

        let totalLeft = Math.floor((arr1Length + arr2Length + 1) / 2)
        let left = 0
        let right = arr1Length

        while (left <= right) {
            let i = Math.floor((right - left) / 2) + left
            let j = totalLeft - i

            const L1 = i === 0 ? -Infinity : arr1[i - 1]
            const R1 = i === arr1Length ? Infinity : arr1[i]
            const L2 = j === 0 ? -Infinity : arr2[j - 1]
            const R2 = j === arr2Length ? Infinity : arr2[j]

            if (L1 <= R2 && L2 <= R1) {
                if ((arr1Length + arr2Length) % 2 === 0) {
                    return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
                } else {
                    return Math.max(L1, L2);
                }
            } else if (L1 > R2) {
                right = i - 1
            } else {
                left = i + 1
            }
        }
    }
}
