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



// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.


// Follow up: Can you solve it using O(1)(i.e.constant) memory ?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// slow, fast. В цикле смещаем их на 1, 2 шага, затем проверяем: Если равны, то true

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n), O(1)
var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) return true
    }
    return false
};

// 704. Binary Search
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.



//     Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:

// 1 <= nums.length <= 104
//     - 104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// l, r, while (l<=r), m inside the cycle, update l or r
// O(log n), O(1)
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m
        else if (nums[m] < target) l = m + 1
        else r = m - 1
    }
    return -1
};

// 543. Diameter of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.



// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

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
// let maxDiameter, dfs(), update maxDiameter (l + r), return the height of the tree
// T: O(n), S: O(h): h = height of the tree (O(log n) - for balanced tree, O(n) for unbalanced)
var diameterOfBinaryTree = function (root) {
    if (root === null) return 0
    let maxD = 0;

    //function returns the height, not diameter
    function dfs(node) {
        if (node === null) return 0

        let left = dfs(node.left) // height of left subtree
        let right = dfs(node.right)

        // update maxDiameter
        maxD = Math.max(maxD, left + right) // left + right = diameter of a tree

        return Math.max(left, right) + 1
    }

    dfs(root)
    return maxD
};

// 70. Climbing Stairs
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

// O(n), O(1)
var climbStairs = function (n) {
    let one = 1
    let two = 1
    for (let i = 0; i < n - 1; i++) {
        temp = one
        one = one + two
        two = temp
    }
    return one
};

// O(n), O(1)
var climbStairs = function (n) {
    if (n <= 2) return n;

    let prev1 = 1, prev2 = 2;

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
};

/**
 * @param {number} n
 * @return {number}
 */
// O(n), O(n)
var climbStairs = function (n) {
    // Если лестница состоит из одной или двух ступенек, ответ очевиден.
    if (n <= 2) {
        return n;
    }

    // Создаем массив для хранения количества способов добраться до каждой ступеньки.
    let dp = new Array(n + 1);

    // Инициализируем начальные значения.
    // До первой ступеньки можно добраться одним способом - одним шагом.
    // До второй ступеньки можно добраться двумя способами - двумя шагами по одной ступеньке или одним шагом сразу на две ступеньки.
    dp[1] = 1;
    dp[2] = 2;

    // Итерируемся начиная с третьей ступеньки.
    for (let i = 3; i <= n; i++) {
        // Количество способов добраться до текущей ступеньки равно сумме
        // способов добраться до предыдущей и предпредыдущей ступенек.
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Возвращаем количество способов добраться до верхней ступеньки.
    return dp[n];


};

// 2627. Debounce
// Solved
// Medium
// Companies
// Hint
// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.



// Example 1:

// Input: 
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) { 
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
// Example 2:

// Input: 
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
// Explanation:
// The 1st call is delayed until 70ms. The inputs were (1).
// The 2nd call is delayed until 120ms. The inputs were (2).
// Example 3:

// Input: 
// t = 150
// calls = [
//   {"t": 50, inputs: [1, 2]},
//   {"t": 300, inputs: [3, 4]},
//   {"t": 300, inputs: [5, 6]}
// ]
// Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
// Explanation:
// The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
// The 2nd call is cancelled by the 3rd call
// The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).


// Constraints:

// 0 <= t <= 1000
// 1 <= calls.length <= 10
// 0 <= calls[i].t <= 1000
// 0 <= calls[i].inputs.length <= 10

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// 206. Reverse Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
curr = head,
prev = null
while(curr)
   next 
   prev <- curr
   смещаем 2 указателя
return prev
