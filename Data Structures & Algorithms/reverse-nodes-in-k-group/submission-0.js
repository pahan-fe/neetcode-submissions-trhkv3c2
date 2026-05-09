/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dump = new ListNode()
        dump.next = head

        let prevGroupHead = dump

        while (true) {
            let curr = prevGroupHead
            for (let i = 0; i < k; i++) {
                curr = curr.next
                if (curr === null) {
                    return dump.next
                }
            }

            this.reverseRange(prevGroupHead.next, curr.next)

            const newPrevGroupHead = prevGroupHead.next
            prevGroupHead.next = curr
            prevGroupHead = newPrevGroupHead
        }
    }

    reverseRange(start, stop) {
        let prev = stop
        let curr = start

        while (curr !== stop) {
            const next = curr.next
            curr.next = prev

            prev = curr
            curr = next
        }
    }
}
