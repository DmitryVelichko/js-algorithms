// 671. Second Minimum Node In a Binary Tree
// Easy
// 1.8K
// 1.8K
// Companies
// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.


// Example 1:


// Input: root = [2,2,5,null,null,5,7]
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.
// Example 2:


// Input: root = [2,2,2]
// Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest value.


// Constraints:

// The number of nodes in the tree is in the range [1, 25].
// 1 <= Node.val <= 231 - 1
// root.val == min(root.left.val, root.right.val) for each internal node of the tree.

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
var findSecondMinimumValue = function (root) {
    if (!root) return -1
    let minVal1 = root.val
    let minVal2 = Infinity
    let stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (minVal1 < node.val && node.val < minVal2) minVal2 = node.val
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return minVal2 === Infinity ? -1 : minVal2


}; 