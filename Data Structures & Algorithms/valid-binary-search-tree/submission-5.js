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
        const stack = [{ node: root, min: -Infinity, max: Infinity }]

        while (stack.length) {
            const { node, min, max } = stack.pop()

            if (!node) {
                continue
            }

            if (node.val <= min || node.val >= max) {
                return false
            }

            stack.push(
                { node: node.left, min, max: node.val }, 
                { node: node.right, min: node.val, max: max }
            )
        }

        return true

        // let result = true

        // const validate = (node, min, max) => {
        //     if (!node) {
        //         return
        //     }

        //     if (node.val <= min || node.val >= max) {
        //         result = false
        //     }

        //     validate(node.left, min, node.val)
        //     validate(node.right, node.val, max)
        // }

        // validate(root, -Infinity, Infinity)

        // return result
    }
}
