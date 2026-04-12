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
    maxDepth(root) {
        if (!root) {
            return 0
        }

        let max = 1
        const stack = [{ node: root, deep: 1 }]

        while (stack.length > 0) {
            const { node, deep } = stack.pop()

            if (node.left) {
                stack.push({ node: node.left, deep: deep + 1 })
            }
            if (node.right) {
                stack.push({ node: node.right, deep: deep + 1 })
            }
            max = Math.max(max, deep)
        }

        return max

        // const dfs = (node) => {
        //     if (!node) {
        //         return 0
        //     }

        //     return Math.max(dfs(node.left), dfs(node.right)) + 1
        // }

        // return dfs(root)
    }
}
