// 897. Increasing Order Search Tree
// Easy
// 4.2K
// 663
// Companies
// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000


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
var increasingBST = function(root) {
    // Initialize two pointers, newRoot and newTree, to null.
    let newRoot = null, newTree = null;

    // Define a recursive helper function that will traverse the tree in-order.
    const helper = (node) => {
        // If the current node is null, return.
        if(!node) return;

        // Traverse the left subtree first.
        helper(node.left);

        // If newRoot is not set, set it to the current node.
        // Also, set newTree to the same node initially.
        if(!newRoot) {
            newRoot = newTree = node;
        } else {
            // If newRoot is already set, link the current node to the right of newTree.
            newTree.right = node;
            // Move the newTree pointer to the right.
            newTree = newTree.right;
            
            // Set the left pointer of the current node to null.
            // This is because the new tree is constructed in such a way that
            // it only contains right children.
            node.left = null;
        }

        // Traverse the right subtree.
        helper(node.right);
    }

    // Start the in-order traversal from the root.
    helper(root);

    // Return the newRoot of the modified tree.
    return newRoot;
};
