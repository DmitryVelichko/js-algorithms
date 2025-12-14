// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Example 1:


// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 3
// Example 2:

// Input: root = [1, null, 2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range[0, 104].
// - 100 <= Node.val <= 100


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

// DFS iterative pre-order: O(n), O(h)
//Best when tree is deep, avoids recursion limit

function maxDepth2(root) {
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let maxDepth = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        if (node) {
            maxDepth = Math.max(maxDepth, depth); // Update the maximum depth
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return maxDepth;
}

// 1046. Last Stone Weight
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.



// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1


// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000


/**
 * 
 * 
 * @param {number[]} stones
 * @return {number}
 */
/**
 * getMaxHeap(): add all stones to maxHeap
 shrink(): get the heaviest stone1 and stone2 from heap, add to heap the difference if it's > 0
 if maxHeap is empty return 0 or top element: .front().element
 */
//Time O(N * log(N)) | Space O(N)
var lastStoneWeight = function (stones) {
    const maxHeap = getMaxHeap(stones)

    shrink(maxHeap)

    if (maxHeap.isEmpty()) return 0
    else return maxHeap.front().element

};

const getMaxHeap = (stones, maxHeap = new MaxPriorityQueue()) => {
    for (const stone of stones) {
        maxHeap.enqueue(stone)
    }

    return maxHeap
}

const shrink = (maxHeap) => {
    while (maxHeap.size() > 1) {
        const [stoneMax1, stoneMax2] = [maxHeap.dequeue().element, maxHeap.dequeue().element]

        const newStone = stoneMax1 - stoneMax2

        if (newStone > 0) maxHeap.enqueue(newStone);
    }
}