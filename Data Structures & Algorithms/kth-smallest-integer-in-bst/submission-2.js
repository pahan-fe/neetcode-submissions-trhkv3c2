/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = []

        const dfs = (node) => {
            if (!node) {
                return
            }

            result.push(node.val)

            if (node.left) {
                dfs(node.left)
            }
            if (node.right) {
                dfs(node.right)
            }
        }

        dfs(root)

        result.sort((a, b) => a - b)

        return result[k - 1]
    }
}
