// 653. Two Sum IV - Input is a BST
// Easy
// 6.5K
// 255
// Companies
// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.



// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105

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
 * @param {number} k // set [5,3,7]
 * @return {boolean} //stack []
 */
var findTarget = function (root, k) {
    if (!root) return false;
    const set = new Set();
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return false
}