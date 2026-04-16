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

// /**
//  * @param {number[]} nums
//  */
// var Solution = function(nums) {
//     this.nums = nums;
// };

// /**
//  * @return {number[]}
//  */
// Solution.prototype.reset = function() {
//     return this.nums
// };

// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // Implementing Fisher-Yates Algo
    
    const shuffled = this.nums.slice()
    const n = shuffled.length
    for(let i=shuffled.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }
    
    return shuffled
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// 226. Invert Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// DFS recursive pre-order: O(n), Space: O(h) h = height of the tree (for 2 nodes h = 2, for 1 node h = 0).
// Space O(h), for a skewed tree: O(n) linked list, for a balanced binary tree: O(log n)
var invertTree = function (root) {

    if (!root) return null

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};


// DFS iterative
// Time: O(n), space: O(h) (best - O(log n) for BST, O(n) for linked list)
var invertTree2 = function (root) {
    if (root === null) return null; 

    const stack = [root]; 

    while (stack.length > 0) {
        const node = stack.pop(); 

        [node.left, node.right] = [node.right, node.left];

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return root; 
};