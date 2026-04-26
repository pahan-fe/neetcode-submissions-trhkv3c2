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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode()
        dummy.next = head

        let slow = dummy
        let fast = dummy
        let counter = n + 1

        while (counter > 0) {
            counter--
            fast = fast.next
        }

        while (fast !== null) {
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow.next.next

        return dummy.next
    }
}
