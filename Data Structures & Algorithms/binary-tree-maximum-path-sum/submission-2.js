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
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity

        const dfs = (node) => {
            if (!node) {
                return 0
            }

            const leftSum = Math.max(0, dfs(node.left))
            const rightSum = Math.max(0, dfs(node.right))
            const localSum = node.val + leftSum + rightSum

            max = Math.max(max, localSum)

            return node.val + Math.max(leftSum, rightSum)
        }

        dfs(root)

        return max
    }
}
