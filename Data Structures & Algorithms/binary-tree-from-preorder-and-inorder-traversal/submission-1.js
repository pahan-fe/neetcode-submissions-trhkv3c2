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
        let preorderIdx = 0;
        const inorderMap = new Map();

        inorder.forEach((el, index) => {
            inorderMap.set(el, index)
        });

        const dfs = (left, right) => {
            if (left > right) {
                return null
            }

            
            const preorderVal = preorder[preorderIdx++]
            const node = new TreeNode(preorderVal)

            const mid = inorderMap.get(preorderVal)

            node.left = dfs(left, mid - 1)
            node.right = dfs(mid + 1, right)

            return node
        }

        return dfs(0, inorder.length - 1)



        // const dfs = (preorderLocal, inorderLocal) => {
        //     if (preorderLocal.length === 0) {
        //         return null
        //     }

        //     const node = new TreeNode(preorderLocal[0])
        //     const inorderNodeIndex = inorderLocal.findIndex(el => el === preorderLocal[0])
            
        //     const leftPre = preorderLocal.slice(1, inorderNodeIndex + 1)
        //     const rightPre = preorderLocal.slice(inorderNodeIndex + 1)

        //     const leftIn = inorderLocal.slice(0, inorderNodeIndex)
        //     const rightIn = inorderLocal.slice(inorderNodeIndex + 1)

        //     node.left = dfs(leftPre, leftIn)
        //     node.right = dfs(rightPre, rightIn)

        //     return node
        // }

        // return dfs(preorder, inorder)
    }
}
