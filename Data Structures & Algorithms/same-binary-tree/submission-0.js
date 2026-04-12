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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let result = true

        const check = (node1, node2) => {
            if (!node1 && !node2) {
                return
            }

            if (!node1 && node2 || !node2 && node1) {
                result = false
                return
            }

            if (node1.val !== node2.val)  {
                result = false
                return
            }

            check(node1.left, node2.left)
            check(node1.right, node2.right)
        }

        check(p, q)

        return result
    }
}
