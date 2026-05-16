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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true

        const dfs = (node) => {
            if (!node) {
                return 0
            }

            const leftHeight = dfs(node.left)
            const rightHeight = dfs(node.right)

            if (Math.abs(leftHeight - rightHeight) > 1) {
                balanced = false
            }

            return Math.max(leftHeight, rightHeight) + 1
        }

        dfs(root)

        return balanced
    }
}
