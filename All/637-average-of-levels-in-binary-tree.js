// 637. Average of Levels in Binary Tree
// Easy
// 5.1K
// 312
// Companies
// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
var averageOfLevels = function(root) {
    // Если корень дерева отсутствует, возвращаем пустой массив
    if (!root) {
        return [];
    }

    const result = []; // Массив для хранения средних значений узлов на каждом уровне
    const queue = [root]; // Очередь для выполнения обхода в ширину (BFS)

    while (queue.length > 0) {
        const levelSize = queue.length; // Размер текущего уровня
        let levelSum = 0; // Сумма значений узлов на текущем уровне

        // Обход узлов на текущем уровне
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Извлекаем узел из начала очереди
            levelSum += node.val; // Добавляем значение узла к сумме

            // Если есть левый потомок, добавляем его в очередь
            if (node.left) {
                queue.push(node.left);
            }

            // Если есть правый потомок, добавляем его в очередь
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Рассчитываем среднее значение для текущего уровня и добавляем в массив результатов
        result.push(levelSum / levelSize);
    }

    return result; // Возвращаем массив средних значений узлов на каждом уровне
};