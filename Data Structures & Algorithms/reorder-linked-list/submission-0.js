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
     * @return {void}
     */
    reorderList(head) {
        // find middle
        let slow = head
        let fast = head

        while (fast && fast.next) {           
            slow = slow.next
            fast = fast.next.next
        }

        // reverse second part
        let prev = null
        let curr = slow.next
        let next = null
        slow.next = null

        while (curr) {
            next = curr.next

            curr.next = prev

            prev = curr
            curr = next
        }

        // merge
        while (head && prev) {
            let leftNext = head.next
            let rightNext = prev.next

            prev.next = head.next
            head.next = prev

            head = leftNext
            prev = rightNext
        }

        return head
    }
}
