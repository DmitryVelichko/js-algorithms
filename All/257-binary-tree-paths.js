// 257. Binary Tree Paths
// Easy

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    let paths = [];
    
    function dfsTraversal(root, cur) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(cur + root.val);
            return;
        }
        dfsTraversal(root.left, cur + root.val + "->");
        dfsTraversal(root.right, cur + root.val + "->");
    }
    
    dfsTraversal(root, "");
    return paths;
    // Time Complexity: O(N), we always visit all nodes
    // Space Complexity: O(H) or O(N), height can be at most N (in case of a skewed tree)
};