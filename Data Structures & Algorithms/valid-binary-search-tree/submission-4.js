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
    isValidBST(root) {
        let result = true

        const validate = (node, min, max) => {
            if (!node) {
                return
            }

            if (node.val <= min || node.val >= max) {
                result = false
            }

            validate(node.left, min, node.val)
            validate(node.right, node.val, max)
        }

        validate(root, -Infinity, Infinity)

        return result
    }
}
