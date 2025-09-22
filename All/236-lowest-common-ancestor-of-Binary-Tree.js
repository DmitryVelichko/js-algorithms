// 235. Lowest Common Ancestor of a Binary Search Tree
// Medium

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null;

  const dfs = (node) => {
    if (node === null) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let cur = node === p || node === q;

    if (left + right + cur >= 2) result = node;

    return left || right || cur;
  };

  dfs(root);
  return result;
};
