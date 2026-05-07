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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null
        }

        return this.devide(lists)
    }

    devide(lists) {
        if (lists.length === 1) {
            return lists[0]
        }

        let mid = Math.floor(lists.length / 2)
        let left = this.devide(lists.slice(0, mid))
        let right = this.devide(lists.slice(mid))

        return this.merge2Lists(left, right)
    }

    merge2Lists(list1, list2) {
        const dump = new ListNode()
        let prev = dump

        while (list1 && list2) {
            if (list1.val < list2.val) {
                prev.next = list1
                list1 = list1.next
            } else {
                prev.next = list2
                list2 = list2.next
            }

            prev = prev.next
        }

        prev.next = list1 ?? list2

        return dump.next
    }
}
