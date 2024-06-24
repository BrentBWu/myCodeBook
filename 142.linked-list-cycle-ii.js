/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {lili}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let pFast = head.next.next;
    let pSlow = head.next;

    //Floyd's cycle-finding algorithm
    while(pFast != pSlow) {
        if(pFast === null || pFast.next === null) {
            return null;
        }
        pFast = pFast.next.next;
        pSlow = pSlow.next;
    }
    pFast = head;
    while(pSlow != pFast) {
        pSlow = pSlow.next;
        pFast = pFast.next;
    }
    return pFast;
};
// @lc code=end

