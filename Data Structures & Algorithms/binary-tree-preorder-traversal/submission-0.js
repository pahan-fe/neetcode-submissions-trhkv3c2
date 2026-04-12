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
    preorderTraversal(root) {
        const result = []

        const traverse = (node, result) => {
            if (!node) {
                return
            }

            result.push(node.val)

            traverse(node.left, result)
            traverse(node.right, result)
        }

        traverse(root, result)

        return result
    }
}
