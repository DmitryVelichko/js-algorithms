// 1457. Pseudo-Palindromic Paths in a Binary Tree
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

// Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

 

// Example 1:



// Input: root = [2,3,1,3,1,null,1]
// Output: 2 
// Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
// Example 2:



// Input: root = [2,1,1,1,3,null,null,null,null,null,1]
// Output: 1 
// Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).
// Example 3:

// Input: root = [9]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 105].
// 1 <= Node.val <= 9

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
var pseudoPalindromicPaths = function(root) {
    return dfs(root, 0);
};

/**
 * @param {TreeNode} root
 * @param {number} mask
 * @return {number}
 */
var dfs = function(root, mask) {
    if (!root) {
        return 0;
    }

    mask ^= 1 << root.val;

    if (!root.left && !root.right) {
        // Check if the bitmask represents a pseudo-palindromic path
        return (mask & (mask - 1)) === 0 ? 1 : 0;
    }

    // Recursively traverse left and right subtrees
    return dfs(root.left, mask) + dfs(root.right, mask);
};