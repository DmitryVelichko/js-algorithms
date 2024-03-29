// 513. Find Bottom Left Tree Value
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

// Example 1:


// Input: root = [2,1,3]
// Output: 1
// Example 2:


// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  var findBottomLeftValue = function(root) {

    const queue = [root];
    let leftmostValue;

    while (queue.length > 0) {
        const node = queue.shift();

        leftmostValue = node.val;

        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }

    return leftmostValue;
};
  
  // Example usage:
//   const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
//   console.log(findBottomLeftValue(tree1)); // Output: 1
  
  const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, new TreeNode(5), new TreeNode(6, null, new TreeNode(7))));
  console.log(findBottomLeftValue(tree2)); // Output: 7
  