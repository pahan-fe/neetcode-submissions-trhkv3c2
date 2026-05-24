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
    goodNodes(root) {
        let counter = 0

        const dfs = (node, max) => {
            if (!node) {
                return
            }

            if (node.val >= max) {
                max = node.val
                counter++
            }

            if (node.left) {
                dfs(node.left, max)
            }
            if (node.right) {
                dfs(node.right, max)
            }
        }

        dfs(root, -Infinity)

        return counter
    }
}
