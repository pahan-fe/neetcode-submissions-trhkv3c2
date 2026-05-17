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
        const stack = [p, q]

        while (stack.length) {
            const right = stack.pop()
            const left = stack.pop()

            if (!right && !left) {
                continue
            }

            if (right && !left || left && !right) {
                return false
            }

            if (right.val !== left.val) {
                return false
            }

            stack.push(right.left, left.left, right.right, left.right)
        }

        return true
    }
}
