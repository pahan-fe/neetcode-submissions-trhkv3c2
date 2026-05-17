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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = []

        const bfs = (node, level) => {
            if (!node) {
                return
            }

            if (!result[level]) {
                result[level] = []
            }
            result[level].push(node.val)

            const newLevel = level + 1

            if (node.left) {
                bfs(node.left, newLevel)
            }
            if (node.right) {
                bfs(node.right, newLevel)
            }
        }

        bfs(root, 0)

        return result


        // if (!root) {
        //     return []
        // }

        // const result = []
        // const queue = [root]

        // while (queue.length) {
        //     const level = []
        //     let levelSize = queue.length

        //     while (levelSize > 0) {
        //         const node = queue.shift()

        //         level.push(node.val)
        //         if (node.left) {
        //             queue.push(node.left)
        //         }
        //         if (node.right) {
        //             queue.push(node.right)
        //         }
               
        //         levelSize--
        //     }
          
        //     result.push(level)
        // }

        // return result
    }
}
