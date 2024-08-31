// 206. Reverse Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 /**
 curr = head,
 prev = null
 while(curr)
    next = curr.next // сохраняем ссылку на next
    рвём связь
    смещаем 2 указателя
 return prev
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // O(n), O(1)
 var reverseList = function(head) {
    let curr = head
    let prev = null
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

 /**
base case: (head === null) return head
newHead = recursion(head.next)
ссылаемся на предыдущий узел
рвем связь
return newHead
 */

