// 543. Diameter of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.



// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
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
// let maxDiameter, dfs(), update maxDiameter (l + r), return the height of the tree
// T: O(n), S: O(h): h = height of the tree (O(log n) - for balanced tree, O(n) for unbalanced)
var diameterOfBinaryTree = function (root) {
    if (root === null) return 0
    let maxD = 0;

    //function returns the height, not diameter
    function dfs(node) {
        if (node === null) return 0

        let left = dfs(node.left) // height of left subtree
        let right = dfs(node.right)

        // update maxDiameter
        maxD = Math.max(maxD, left + right) // left + right = diameter of a tree

        return Math.max(left, right) + 1
    }

    dfs(root)
    return maxD
};