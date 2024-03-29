// 222. Count Complete Tree Nodes
// Easy

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

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
var countNodes = function(root) {
    
    // Функция для вычисления глубины левого поддерева
    function leftDepth(node) {
        if (!node) return 0;
        return leftDepth(node.left) + 1;
    }
    
    // Функция для вычисления глубины правого поддерева
    function rightDepth(node) {
        if (!node) return 0;
        return rightDepth(node.right) + 1;
    }
    
    // Рекурсивная функция для обхода дерева и подсчета узлов
    function traverse(node) {
        const leftLen = leftDepth(node); // Глубина левого поддерева
        const rightLen = rightDepth(node); // Глубина правого поддерева
        
        // Если глубины левого и правого поддеревьев совпадают, это полное бинарное дерево
        if (leftLen === rightLen) return Math.pow(2, leftLen) - 1;
        
        // Иначе, рекурсивно обходим левое и правое поддеревья и суммируем их узлы
        return traverse(node.left) + traverse(node.right) + 1;
    }
    
    // Вызываем обход с корня дерева
    return traverse(root);
};


