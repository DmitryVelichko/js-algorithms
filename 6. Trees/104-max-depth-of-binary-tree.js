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
// 3 ways: DFS(recursive/iterative) & BFS
// O(n), O(h): which is O(n) in worst case of an unbalanced tree

// DFS recursive
const maxDepth = (root) => {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// DFS iterative

function maxDepth2(root) {
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let res = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop(); // Destructure node and depth from stack

        if (node) {
            res = Math.max(res, depth); // Update the maximum depth
            stack.push([node.left, depth + 1]); // Push left child with incremented depth
            stack.push([node.right, depth + 1]); // Push right child with incremented depth
        }
    }
    return res;
}

