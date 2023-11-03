// 501. Find Mode in Binary Search Tree
// Easy

// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:


// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105


// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
 * @return {number[]}
 */
var findMode = function (root) {
    let hash = {};
    let maxCount = 0;
    let result = [];

    function traverse(node) {
        if (!node) return;

        hash[node.val] = (hash[node.val] || 0) + 1;
        maxCount = Math.max(maxCount, hash[node.val]);

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

