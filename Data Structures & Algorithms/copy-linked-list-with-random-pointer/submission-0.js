// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return null
        }

        const helper = new Map()

        let curr = head
        while (curr) {
            helper.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while (curr) {
            const originalNext = curr.next
            const originalRandom = curr.random

            const copyNext = originalNext ? helper.get(originalNext) : null
            const copyRandom = originalRandom ? helper.get(originalRandom) : null

            const currCopy = helper.get(curr)

            currCopy.next = copyNext
            currCopy.random = copyRandom

            curr = originalNext
        }

        curr = helper.get(head)

        return curr
    }
}
