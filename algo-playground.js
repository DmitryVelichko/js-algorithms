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
    const maxPQ = new MaxPriorityQueue();

    for (const stone of stones) {
        maxPQ.enqueue(stone);
    }

    while (maxPQ.size() > 1) {
        const stone1 = maxPQ.dequeue();
        const stone2 = maxPQ.dequeue();

        if (stone1 !== stone2) {
            maxPQ.enqueue(stone1 - stone2);
        }
    }

    return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
}

// 19. Remove Nth Node From End of List
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.



// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


// Follow up: Could you do this in one pass?
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// dummy node, left -> dummy, right -> head
// смещаем right на n узлов вперед
// смещаем left и right на 1 пока right не станет null
// удаляем узел: l -> l.next.next
// O(n), O(1)
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-Infinity, head)

    let l = dummy
    let r = head

    while (n > 0 && r !== null) {
        r = r.next
        --n
    }

    while (r) {
        r = r.next
        l = l.next
    }

    l.next = l.next.next // delete the nth node
    return dummy.next
};

// 739. Daily Temperatures
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.



// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]


// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
Задача на стек

stack = []
res = [0,0,0...]
for(temps.length - 1)
   while стек полон и температура больше той что в стеке
       stack.pop()
       res[index] = i - index
   stack.push(i) на каждой итерации
return res
*/

//  Time O(N) | Space O(N)
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i)
    }
    return result;
};

// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


