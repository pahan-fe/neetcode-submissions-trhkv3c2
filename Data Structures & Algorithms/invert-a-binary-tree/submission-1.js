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
     * @return {TreeNode}
     */
    invertTree(root) {        
        const stack = [root]

        while (stack.length) {
            const node = stack.pop()

            if (!node) {
                continue
            }

            [node.right, node.left] = [node.left, node.right]
            stack.push(node.left, node.right)
        }

        return root

        // const revert = (node) => {
        //     if (!node) {
        //         return
        //     }

        //     [node.right, node.left] = [node.left, node.right]
            
        //     revert(node.left)
        //     revert(node.right)
        // }

        // revert(root)

        // return root
    }
}
