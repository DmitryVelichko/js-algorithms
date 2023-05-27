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
 * @return {number[]}
 */
// Задача на рекурсию - inorder traversal Это left, root, right, вывод по порядку 1,2,3
// 1. Базовый случай - если root === null вернуть пустой массив
// 2. вернуть массив, туда расспредить рекурсивно функцию с root.left, значение root.val функцию с root.right


var inorderTraversal = function(root) {
    
    if(root === null) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    
};

// function inorderTraversal(root) {
//     const stack = [];
//     const res = [];
  
//     while (root || stack.length) {
//       if (root) {
//         stack.push(root);
//         root = root.left;
//       } else {
//         root = stack.pop();
//         res.push(root.val);
//         root = root.right;
//       }
//     }
  
//     return res;
//   }