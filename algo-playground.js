// // 543. Diameter of Binary Tree
// // Solved
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Given the root of a binary tree, return the length of the diameter of the tree.

// // The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// // The length of a path between two nodes is represented by the number of edges between them.



// // Example 1:


// // Input: root = [1,2,3,4,5]
// // Output: 3
// // Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// // Example 2:

// // Input: root = [1,2]
// // Output: 1


// // Constraints:

// // The number of nodes in the tree is in the range [1, 104].
// // -100 <= Node.val <= 100

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// // let maxDiameter, dfs(), update maxDiameter (l + r), return the height of the tree
// // T: O(n), S: O(h): h = height of the tree (O(log n) - for balanced tree, O(n) for unbalanced)
// var diameterOfBinaryTree = function (root) {
//     if (root === null) return 0
//     let maxD = 0;

//     //function returns the height, not diameter
//     function dfs(node) {
//         if (node === null) return 0

//         let left = dfs(node.left) // height of left subtree
//         let right = dfs(node.right)

//         // update maxDiameter
//         maxD = Math.max(maxD, left + right) // left + right = diameter of a tree

//         return Math.max(left, right) + 1
//     }

//     dfs(root)
//     return maxD
// };
// // 226. Invert Binary Tree
// // Solved
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Given the root of a binary tree, invert the tree, and return its root.



// // Example 1:


// // Input: root = [4,2,7,1,3,6,9]
// // Output: [4,7,2,9,6,3,1]
// // Example 2:


// // Input: root = [2,1,3]
// // Output: [2,3,1]
// // Example 3:

// // Input: root = []
// // Output: []


// // Constraints:

// // The number of nodes in the tree is in the range [0, 100].
// // -100 <= Node.val <= 100


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// // DFS recursive pre-order: O(n), Space: O(h) h = height of the tree (for 2 nodes h = 2, for 1 node h = 0).
// // Space O(h), for a skewed tree: O(n) linked list, for a balanced binary tree: O(log n)
// var invertTree = function (root) {

//     if (!root) return null

//     let temp = root.left
//     root.left = root.right
//     root.right = temp

//     invertTree(root.left)
//     invertTree(root.right)

//     return root
// };


// // DFS iterative
// // Time: O(n), space: O(h) (best - O(log n) for BST, O(n) for linked list)
// var invertTree2 = function (root) {
//     if (root === null) return null;

//     const stack = [root];

//     while (stack.length > 0) {
//         const node = stack.pop();

//         [node.left, node.right] = [node.right, node.left];

//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);
//     }

//     return root;
// };

// // 15. 3Sum
// // Solved
// // Medium
// // Topics
// // premium lock icon
// // Companies
// // Hint
// // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// // Notice that the solution set must not contain duplicate triplets.

// // Example 1:

// // Input: nums = [-1,0,1,2,-1,-4]
// // Output: [[-1,-1,2],[-1,0,1]]
// // Explanation: 
// // nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// // nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// // nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// // The distinct triplets are [-1,0,1] and [-1,-1,2].
// // Notice that the order of the output and the order of the triplets does not matter.
// // Example 2:

// // Input: nums = [0,1,1]
// // Output: []
// // Explanation: The only possible triplet does not sum up to 0.
// // Example 3:

// // Input: nums = [0,0,0]
// // Output: [[0,0,0]]
// // Explanation: The only possible triplet sums up to 0.


// // Constraints:

// // 3 <= nums.length <= 3000
// // -105 <= nums[i] <= 105

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// /**
// * res = []
//  сортируем массив
//  скипаем дубликаты
//  2 pointers for 2 numbers + первое число
//  скипаем дубликаты
// */
// // Time: O(n^2), Space: O(n^2)
// var threeSum = function (nums) {
//     const res = []
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length; i++) {
//         // skip duplicates
//         if (i > 0 && nums[i - 1] === nums[i]) continue

//         let l = i + 1
//         let r = nums.length - 1
//         while (l < r) {
//             let threeSum = nums[i] + nums[l] + nums[r]
//             if (threeSum > 0) r--
//             else if (threeSum < 0) l++
//             else {
//                 res.push([nums[i], nums[l], nums[r]])
//                 l++
//                 r--
//                 while (l < r && nums[l] === nums[l - 1]) l++
//             }
//         }
//     }
//     return res
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// // Задача на рекурсию - inorder traversal Это left, root, right, вывод по порядку 1,2,3
// // 1. Базовый случай - если root === null вернуть пустой массив
// // 2. вернуть массив, туда расспредить рекурсивно функцию с root.left, значение root.val функцию с root.right


// var inorderTraversal = function (root) {

//     if (root === null) return []
//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]

// };

// // function inorderTraversal(root) {
// //     const stack = [];
// //     const res = [];

// //     while (root || stack.length) {
// //       if (root) {
// //         stack.push(root);
// //         root = root.left;
// //       } else {
// //         root = stack.pop();
// //         res.push(root.val);
// //         root = root.right;
// //       }
// //     }

// //     return res;
// //   }

// /**
//  * @param {string} s
//  * @return {number}
//  */
// /**
// Sliding window: 2 pointers: set, l, max.
// for loop across the whole string (r = 0): while right char exists in set ? delete left char from set, l++;
// add right char to set, update max string size
// */
// // O(n), O(n)

// // 3. Longest Substring Without Repeating Characters
// // Solved
// // Medium
// // Topics
// // premium lock icon
// // Companies
// // Hint
// // Given a string s, find the length of the longest substring without duplicate characters.



// // Example 1:

// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// // Example 2:

// // Input: s = "bbbbb"
// // Output: 1
// // Explanation: The answer is "b", with the length of 1.
// // Example 3:

// // Input: s = "pwwkew"
// // Output: 3
// // Explanation: The answer is "wke", with the length of 3.
// // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// // Constraints:

// // 0 <= s.length <= 5 * 104
// // s consists of English letters, digits, symbols and spaces.

// // Sliding window: 2 pointers: set, l, max.
// // for loop across the whole string (r = 0): while right char exists in set ? delete left char from set, l++;
// // add right char to set, update max string size
// // */
// // O(n), O(n)


// var lengthOfLongestSubstring = function (s) {
//     const set = new Set();
//     let l = 0;
//     let max = 0;

//     for (let r = 0; r < s.length; r++) {
//         while (set.has(s[r])) {
//             set.delete(s[l]);
//             l++;
//         }
//         set.add(s[r]);
//         max = Math.max(max, set.size);
//     }
//     return max;
// };

function range(arr) {
    arr.sort((a, b) => a - b)// 1234567 89 10
    const res = [String(arr[0])]
    let isInterval = false
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            isInterval = true
            continue
        }
        if (isInterval) {
            res[res.length - 1] += `-${arr[i - 1]}`
            isInterval = false
        }

        if (arr[i]) res.push(String(arr[i]))
    }

    return res.join()
}
console.log(range([1, 4, 2, 5, 3, 9, 8, 11, 0])) // '0-5, 8-9, 11' 
console.log(range([1, 4, 3, 2])) // '1-4'