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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const bfs = (node) => {
            if (p.val < node.val && q.val < node.val) {
                return bfs(node.left)
            }

            if (p.val > node.val && q.val > node.val) {
                return bfs(node.right)
            }

            return node
        }

        return bfs(root)
    }
}
