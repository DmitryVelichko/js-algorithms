// 104. Maximum Depth of Binary Tree
// Easy

// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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


var isBalanced = function (root) {
    let result = true;
    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (Math.abs(left - right) > 1) result = false;
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return result;
};





// 1 Определяем базовый случай для выхода из рекурсии, возрващаем 0
// 2. Возвращаем максимальное значение из вызова двух рекурсивных функций + 1

// O(n)
const maxDepth2 = (root) => {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};