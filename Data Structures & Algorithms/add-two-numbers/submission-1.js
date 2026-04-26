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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode()
        let res = dummy
        let curry = 0

        while (l1 || l2) {
            const first = l1 ? l1.val : 0
            const second = l2 ? l2.val : 0
            const summ = first + second + curry

            res.next = new ListNode(summ % 10);
            res = res.next

            curry = Math.floor(summ / 10)

            if (l1) {
                l1 = l1.next
            }
            if (l2) {
                l2 = l2.next
            }
        }

        if (curry) {
            res.next = new ListNode(curry)
        }

        return dummy.next
    }
}
