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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = []

        const dfs = (node, level) => {
            if (!node) {
                return
            }

            if (!result[level]) {
               result[level] = node.val
            }

            if (node.right) {
                dfs(node.right, level + 1)
            }
            if (node.left) {
                dfs(node.left, level + 1)
            }
        }

        dfs(root, 0)

        return result
    }
}
