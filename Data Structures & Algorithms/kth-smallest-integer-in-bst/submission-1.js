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

        const bfs = (node) => {
            if (!node) {
                return
            }

            result.push(node.val)

            if (node.left) {
                bfs(node.left)
            }
            if (node.right) {
                bfs(node.right)
            }
        }

        bfs(root)

        result.sort((a, b) => a - b)

        return result[k - 1]
    }
}
