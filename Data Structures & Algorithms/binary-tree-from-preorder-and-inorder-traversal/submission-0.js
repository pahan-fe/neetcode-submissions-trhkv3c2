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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const dfs = (preorderLocal, inorderLocal) => {
            if (preorderLocal.length === 0) {
                return null
            }

            const node = new TreeNode(preorderLocal[0])
            const inorderNodeIndex = inorderLocal.findIndex(el => el === preorderLocal[0])
            
            const leftPre = preorderLocal.slice(1, inorderNodeIndex + 1)
            const rightPre = preorderLocal.slice(inorderNodeIndex + 1)

            const leftIn = inorderLocal.slice(0, inorderNodeIndex)
            const rightIn = inorderLocal.slice(inorderNodeIndex + 1)

            node.left = dfs(leftPre, leftIn)
            node.right = dfs(rightPre, rightIn)

            return node
        }

        return dfs(preorder, inorder)
    }
}
