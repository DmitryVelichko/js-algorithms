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

 // T: O(n), S: O(h): h = height of the tree (O(log n) - for balanced tree, O(n) for unbalanced)
 var diameterOfBinaryTree = function(root) {
    if(root === null) return 0
    let max = 0;

    //returns height
    function dfs(node) {
        if(node === null) return 0
        
        let left = dfs(node.left)
        let right = dfs(node.right)
