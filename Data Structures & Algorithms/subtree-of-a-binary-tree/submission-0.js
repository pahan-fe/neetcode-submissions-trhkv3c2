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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const dfs = (node) => {
            if (!node) {
                return false
            }

            if (this.sameTree(node, subRoot)) {
                return true
            }

            return dfs(node.left) || dfs(node.right)
        }

        return dfs(root)
    }

    sameTree(node1, node2) {
        if (!node1 && !node2) {
            return true
        }

        if (!node1 || !node2 || node1.val !== node2.val) {
            return false
        }

        return this.sameTree(node1.left, node2.left) && this.sameTree(node1.right, node2.right)
    }
}
