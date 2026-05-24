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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const result = []

        const dfs = (node) => {
            if (!node) {
                result.push('null')
                return
            }

            result.push(node.val)

            dfs(node.left)
            dfs(node.right)
        }

        dfs(root)

        return result.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let index = 0
        const arr = data.split(',')

        const makeTree = () => {
            const val = arr[index]

            if (val === 'null') {
                index++
                return null
            }

            const node = new TreeNode(val)
            index++

            node.left = makeTree()
            node.right = makeTree()

            return node
        }

        return makeTree()
    }
}
