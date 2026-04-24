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

// https://www.youtube.com/watch?v=_aKd8xsOa30&ab_channel=shirinsetayesh

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function


var MinStack = function() {
   
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0) {
        this.min.push(val)
    } else {
        let minimum = Math.min(val, this.min[this.min.length - 1])
        this.min.push(minimum)
    }
    
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

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
    if (!root) return 0;
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let maxDepth = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();
        maxDepth = Math.max(maxDepth, depth); // Update the maximum depth

        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);

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
// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// slow, fast. В цикле смещаем их на 1, 2 шага, затем проверяем: Если равны, то true

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n), O(1)
var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) return true
    }
    return false
};

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
    if (!root) return 0;
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let maxDepth = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();
        maxDepth = Math.max(maxDepth, depth); // Update the maximum depth

        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);

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

// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?