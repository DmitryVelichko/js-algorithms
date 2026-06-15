// 347. Top K Frequent Elements
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
   дан массив чисел, вернуть массив k чисел, которые
   встречаются чаще всего 
   
   ( Bucket sort [[], [], []])

   hashmap
   массив результатов
   const arr = Array.from({ length: nums.length + 1 }, () => []); // [_, _,_, [1]]

   for по nums- считаем частотность чисел - {1:3}
  
   for по hash -добавляем в arr числа по частоте- [[ ], [2], [3]]

   for в обратно направлении
       for по массиву
           пушим в результат
           длина массива === k ? return res

*/
// O(n), O(n)
function topKFrequent(nums, k) {
    const res = [];
    const hash = {};

    // Bucket sort [[], [], []]
    const arr = Array.from({ length: nums.length + 1 }, () => []);

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1; //{number (777): 3 times}
    }
    //   0    1    2    3   индекс массива == частота числа
    // [[ ], [3], [2], [1]] число
    for (let num in hash) {
        arr[hash[num]].push(Number(num));
    }

    for (let i = arr.length - 1; i > 0; i--) {
        for (let num of arr[i]) {
            res.push(num);
            if (res.length === k) return res;
        }
    }
}

// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
 
/**
 * @param {string} s
 * @return {number}
 */
/**
Sliding window: 2 pointers: set, l, max.
for loop across the whole string (r = 0): while right char exists in set ? delete left char from set, l++;
add right char to set, update max string size
*/
// O(n), O(n)

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};

// 258. Add Digits
// Easy
// 4.5K
// 1.9K
// Companies
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1
 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
/**
The digital root of a number can be computed with the formula:

If num is 0, the result is 0.
If num is divisible by 9, the result is 9.
Otherwise, the result is num % 9. */

var addDigits = function (num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};



function addDigits(num) {
    while (num >= 10) {  // Continue until num is a single digit
        let sumDigits = 0;
        while (num > 0) {
            sumDigits += num % 10;  // Add the last digit of num to sumDigits
            num = Math.floor(num / 10);  // Remove the last digit from num
        }
        num = sumDigits;  // Update num to the sum of its digits
    }
    return num;
}

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
 
// Seen this question in a real interview before?

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
var diameterOfBinaryTree = function(root) {
    if(root === null) return 0
    let maxD = 0;

    //function returns the height, not diameter
    function dfs(node) {
        if(node === null) return 0
        
        let left = dfs(node.left) // height of left subtree
        let right = dfs(node.right)

        // update maxDiameter
        maxD = Math.max(maxD, left + right) // left + right = diameter of a tree
        
        return Math.max(left, right) + 1
    }

    dfs(root)
    return maxD
};

// 226. Invert Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
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
 * @return {TreeNode}
 */
// DFS recursive pre-order: O(n), Space: O(h) h = height of the tree (for 2 nodes h = 2, for 1 node h = 0).
// Space O(h), for a skewed tree: O(n) linked list, for a balanced binary tree: O(log n)
var invertTree = function (root) {

    if (!root) return null

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};


// DFS iterative
// Time: O(n), space: O(h) (best - O(log n) for BST, O(n) for linked list)
var invertTree2 = function (root) {
    if (root === null) return null; 

    const stack = [root]; 

    while (stack.length > 0) {
        const node = stack.pop(); 

        [node.left, node.right] = [node.right, node.left];

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return root; 
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
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

 
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