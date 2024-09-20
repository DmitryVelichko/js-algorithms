// 226. Invert Binary Tree
// Easy

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Iterative Approach:
// Time O(n), Space O(n)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    const stack = [root]
    while (stack.length > 0) {
        let node = stack.pop()
        if (node !== null) {

            let hold = node.left
            node.left = node.right
            node.right = hold

            stack.push(node.left)
            stack.push(node.right)
        }
    }
    return root
};


// Recursive Approach:
// Time O(n), Space O(h), h-height of the tree, n - number of nodes 

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
