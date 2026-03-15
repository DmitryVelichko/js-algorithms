// 100. Same Tree
// Solved
// Easy
// Topics
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
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ! && ! true
// ! || ! || !== false
// => (l,l) && (r,r)

// O(p + q), O(h)
var isSameTree = function (p, q) {

    if (!p && !q) return true
    if ((!p || !q) || (p.val !== q.val)) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const arr = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!(nums.includes(i))) {
            arr.push(i);
        }
    }
    return arr;
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


// 704. Binary Search
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// l, r, while (l<=r), m inside the cycle, update l or r
// O(log n), O(1)
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m
        else if (nums[m] < target) l = m + 1
        else r = m - 1
    }
    return -1
};

// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
stack 
iterate through string, for each opening braket push closing braket to stack,
closing bracket !== bracket on stack top ? => false

=> stack.len === 0
 */
// O(n), O(n)
var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') stack.push(')')
        else if (char === '[') stack.push(']')
        else if (char === '{') stack.push('}')
        else if (char !== stack.pop()) return false
    }
    return stack.length === 0
};

// 739. Daily Temperatures
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 /**
Задача на стек

stack = []
res = [0,0,0...]
for(temps.length - 1)
    while стек полон и температура больше той что в стеке
        stack.pop()
        res[index] = i - index
    stack.push(i) на каждой итерации
return res
 */

//  Time O(N) | Space O(N)
var dailyTemperatures = function(temperatures) {
   let stack = [];
   let result = new Array(temperatures.length).fill(0);
    for(let i=0; i < temperatures.length; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = i-index;   
        }
        stack.push(i)
    }
    return result;
};

// 226. Invert Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, invert the tree, and return its root.


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

// 226. Invert Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, invert the tree, and return its root.

 
