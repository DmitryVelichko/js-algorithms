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

// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
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
 * @return {number}
 */
// 3 ways: DFS(recursive/iterative) & BFS
// O(n), O(h): which is O(n) in worst case of an unbalanced tree

// DFS recursive
const maxDepth = (root) => {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// DFS iterative pre-order: O(n), O(h)
//Best when tree is deep, avoids recursion limit

function maxDepth2(root) {
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let maxDepth = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        if (node) {
            maxDepth = Math.max(maxDepth, depth); // Update the maximum depth
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return maxDepth;
}

// BFS iterative, O(n), O(n)
//Where w = max width of the tree (max nodes in any level).
// Worst-case scenarios:

// Balanced tree: width ≈ n/2 → O(n)

// Skewed tree: width = 1 → O(1)

// So:

// Balanced tree: O(n) (because one full level can be half the nodes)

// Worst case (skewed tree but narrow): O(1)

//Can use more memory in wide trees

function maxDepth3(root) {
    if (!root) return 0;

    let queue = [[root, 1]]; // store node + depth
    let maxDepth = 0;

    while (queue.length > 0) {
        let [node, depth] = queue.shift();

        if (node) {
            maxDepth = Math.max(maxDepth, depth);
            if (node.left) queue.push([node.left, depth + 1]);
            if (node.right) queue.push([node.right, depth + 1]);
        }
    }

    return maxDepth;
}

// 100. Same Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// if both nodes are null => true
// if one of the nodes in null || values are different => false
// => (l,l) && (r,r)
// Time: O(p + q), space: O(h) (h can be n in unbalanced tree like linked list and log n in balanced tree)
var isSameTree = function (p, q) {

    if (!p && !q) return true
    if ((!p || !q) || (p.val !== q.val)) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100