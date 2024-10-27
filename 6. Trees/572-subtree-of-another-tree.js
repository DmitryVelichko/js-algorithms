// 572. Subtree of Another Tree
// Solved
// Easy
// Topics
// Companies
// Hint
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.



// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false


// Constraints:

// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// T: O(n*m) n = tree nodes, m = subtree nodes, S:O(h + k), h - height of tree, k - height of subtree

/**
function isSameTree(),
if root is null => false
if subRoot is null => true
if trees are the same => true
=> isSubtree() for root.left || root.right
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false
    if (!subRoot) return true
    if (isSameTree(root, subRoot)) return true

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

    function isSameTree(node1, node2) {
        if (!node1 && !node2) return true
        if (!node1 || !node2 || node1.val !== node2.val) return false
        return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
    }
};