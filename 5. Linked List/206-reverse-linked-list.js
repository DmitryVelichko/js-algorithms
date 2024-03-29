// 206. Reverse Linked List
// Easy
//
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
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1. создать 3 ноды: prev, curr, next
// 2. while(curr) инициализируем next, рвем связь с next, делаем связь с prev,
// свдигаем prev и curr вперед
// 3. Возвращаем prev

 // T: O(n), S: O(1)
 var reverseList = function(head) {
    let previous = null
    let current = head
    while(current) {
        const next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
};