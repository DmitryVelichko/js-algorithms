// 783. Minimum Distance Between BST Nodes
// Easy
// 3.4K
// 408
// Companies
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105
 

// Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

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
var minDiffInBST = function(root) {
    let minVal = Infinity
    let prev = null

    function traversal(node) {
        if(!node) return
        traversal(node.left)
        
        if(prev !== null) {
            minVal = Math.min(minVal, node.val-prev)
        }
        prev = node.val

        traversal(node.right)

    }

    traversal(root)
    return minVal
    
};