// // 226. Invert Binary Tree
// // Solved
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Given the root of a binary tree, invert the tree, and return its root.

 

// // Example 1:


// // Input: root = [4,2,7,1,3,6,9]
// // Output: [4,7,2,9,6,3,1]
// // Example 2:


// // Input: root = [2,1,3]
// // Output: [2,3,1]
// // Example 3:

// // Input: root = []
// // Output: []
 

// // Constraints:

// // The number of nodes in the tree is in the range [0, 100].
// // -100 <= Node.val <= 100


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// // DFS recursive pre-order: O(n), Space: O(h) h = height of the tree (for 2 nodes h = 2, for 1 node h = 0).
// // Space O(h), for a skewed tree: O(n) linked list, for a balanced binary tree: O(log n)
// var invertTree = function (root) {

//     if (!root) return null

//     let temp = root.left
//     root.left = root.right
//     root.right = temp

//     invertTree(root.left)
//     invertTree(root.right)

//     return root
// };


// // DFS iterative
// // Time: O(n), space: O(h) (best - O(log n) for BST, O(n) for linked list)
// var invertTree2 = function (root) {
//     if (root === null) return null; 

//     const stack = [root]; 

//     while (stack.length > 0) {
//         const node = stack.pop(); 

//         [node.left, node.right] = [node.right, node.left];

//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);
//     }

//     return root; 
// };

// // 704. Binary Search
// // Solved
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// // You must write an algorithm with O(log n) runtime complexity.

 

// // Example 1:

// // Input: nums = [-1,0,3,5,9,12], target = 9
// // Output: 4
// // Explanation: 9 exists in nums and its index is 4
// // Example 2:

// // Input: nums = [-1,0,3,5,9,12], target = 2
// // Output: -1
// // Explanation: 2 does not exist in nums so return -1
 

// // Constraints:

// // 1 <= nums.length <= 104
// // -104 < nums[i], target < 104
// // All the integers in nums are unique.
// // nums is sorted in ascending order.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// // l, r, while (l<=r), m inside the cycle, update l or r
// // O(log n), O(1)
// var search = function (nums, target) {
//     let l = 0
//     let r = nums.length - 1
//     while (l <= r) {
//         let m = Math.floor((l + r) / 2)
//         if (nums[m] === target) return m
//         else if (nums[m] < target) l = m + 1
//         else r = m - 1
//     }
//     return -1
// };

// 206. Reverse Linked List
// Solved
// Easy
// Topics
// premium lock icon
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
   next 
   prev <- curr
   смещаем 2 указателя
return prev
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n), O(1)
var reverseList = function (head) {
    let curr = head
    let prev = null
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

/**
base case: (head || head.next === null) return head
newHead = recursion(head.next)
5 -> 4
4 -> null
return newHead
*/

// O(n), O(n)
var reverseList = function (head) {

    if (head === null || head.next === null) return head;

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};