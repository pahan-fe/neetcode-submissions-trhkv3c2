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

            let localMax = max
            if (node.val >= max) {
                localMax = node.val
                counter++
            }

            if (node.left) {
                dfs(node.left, localMax)
            }
            if (node.right) {
                dfs(node.right, localMax)
            }
        }

        dfs(root, -Infinity)

        return counter
    }
}
