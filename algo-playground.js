// Meeting Schedule
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false
// Explanation:

// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict
// Example 2:

// Input: intervals = [(5,8),(9,15)]

// Output: true
// Note:

// (0,8),(8,10) is not considered a conflict at 8
// Constraints:

// 0 <= intervals.length <= 500
// 0 <= intervals[i].start < intervals[i].end <= 1,000,000

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */
// Sotring, O(n log n), space: O(1) or O(n) depending on the sorting algo
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }
        return true;
    }
}
// brute force, O(n^2), O(1)
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;
        for (let i = 0; i < n; i++) {
            const A = intervals[i];
            for (let j = i + 1; j < n; j++) {
                const B = intervals[j];
                if (Math.min(A.end, B.end) > Math.max(A.start, B.start)) {
                    return false;
                }
            }
        }
        return true;
    }
}

// 2623. Memoize
// Solved
// Medium
// Companies
// Hint
// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1


// Constraints:

// 0 <= a, b <= 105
// 1 <= n <= 10
// 0 <= actions.length <= 105
// actions.length === values.length
// actions[i] is one of "call" and "getCallCount"
// fnName is one of "sum", "factorial" and "fib"

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)

        if (key in cache) return cache[key]
        const result = fn(...args)
        cache[key] = result
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// 344. Reverse String
// Solved
// Easy
// Topics
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//O(n), O(1)
var reverseString = function (s) {
    let l = 0
    let r = s.length - 1
    while (l < r) {
        let temp = s[r]
        s[r] = s[l]
        s[l] = temp
        l++
        r--
    }
};

//O(n), O(1)
var reverseString = function (s) {
    let l = 0; // Start from index 0
    let r = s.length - 1; // Start from last index

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]]; // Swap characters
        l++;
        r--;
    }
};


function maxElement() {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

// console.log(maxElement(nums))

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i]

        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    }

    return { min, max };
}

// 2623. Memoize
// Solved
// Medium
// Companies
// Hint
// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1


// Constraints:

// 0 <= a, b <= 105
// 1 <= n <= 10
// 0 <= actions.length <= 105
// actions.length === values.length
// actions[i] is one of "call" and "getCallCount"
// fnName is one of "sum", "factorial" and "fib"

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)

        if (key in cache) return cache[key]
        const result = fn(...args)
        cache[key] = result
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// 190. Reverse Bits
// Solved
// Easy
// Topics
// Companies
// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.


// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


// Constraints:

// The input must be a binary string of length 32


// Follow up: If this function is called many times, how would you optimize it?
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {

    let res = 0;

    for (let i = 0; i < 32; i++) {
        res = res << 1; // Shift result left
        res += n & 1;   // Add the last bit of n to result
        n = n >>> 1;    // Unsigned right shift n
    }

    return res >>> 0; // Convert to unsigned 32-bit integer
};

// 2724. Sort By
// Solved
// Easy
// Companies
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.



// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1. 


// Constraints:

// arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};

// 2723. Add Two Promises
// Easy

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.


// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.


// Constraints:

// promise1 and promise2 are promises that resolve with a number

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])

    return val1 + val2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
// Binary Search O(log n)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (value === arr[middle]) return middle;

        if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
};
console.log(binarySearch(arr, 11));

// 100. Same Tree
// Solved
// Easy
// Topics
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ! && ! true
// ! || ! || !== false
// => (l,l) && (r,r)

// O(p + q), O(h)
var isSameTree = function (p, q) {

    if (!p && !q) return true
    if ((!p || !q) || (p.val !== q.val)) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// создаем dummy node и tail,
// l1 <= l2 ? tail -> l1, двигаем l1
// else tail -> l2, двигаем l2
// двигаем tail
// l1 еще есть ? tail -> l1
// l2 еще есть ? tail -> l2
// возвращаем dummy.next

// O(n), O(1)
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-Infinity)
    let tail = dummy

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    if (l1) tail.next = l1
    else if (l2) tail.next = l2
    return dummy.next
}

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

// DFS iterative pre-order

function maxDepth2(root) {
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let res = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        if (node) {
            res = Math.max(res, depth); // Update the maximum depth
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return res;
}



// BFS iterative

const maxDepth3 = (root) => {
    if (!root) return null

    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level += 1;
    }
    return level;
}

// 1. Two Sum
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



//     Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]


// Constraints:

// 2 <= nums.length <= 104
//     - 109 <= nums[i] <= 109
//     - 109 <= target <= 109
// Only one valid answer exists.


//     Follow - up: Can you come up with an algorithm that is less than O(n2) time complexity ?
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
Вернуть индексы двух чисел дающих в сумме target 
 
O(n), O(n)

hashmap
iterate through arr
  find complement pair
  complement not in hash? Add current number and index there 
  complement is in hash? => [current i, complement i]
 */
var twoSum = function (nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (hash[complement] === undefined) hash[nums[i]] = i
        else return [i, hash[complement]]
    }
}
// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false



// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
stack 
iterate through string, for each opening braket push closing braket to stack,
closing bracket !== bracket on stack top ? => false

=> stack.len === 0
 */
// O(n), O(n)
var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') stack.push(')')
        else if (char === '[') stack.push(']')
        else if (char === '{') stack.push('}')
        else if (stack.pop() !== char) return false
    }
    return stack.length === 0
};

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
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n), O(1)
var reverseList = function (head) {
    let curr = head
    let prev = null
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

/**
base case: (head || head.next === null) return head
newHead = recursion(head.next)
5 -> 4
4 -> null
return newHead
*/

// O(n), O(n)
var reverseList = function (head) {

    if (head === null || head.next === null) return head;

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
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

// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
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
    let res = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        if (node) {
            res = Math.max(res, depth); // Update the maximum depth
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return res;
}

// BFS iterative, O(n), O(n)
//Where w = max width of the tree (max nodes in any level).
// Worst-case scenarios:

// Balanced tree: width ≈ n/2 → O(n)

// Skewed tree: width = 1 → O(1)

// So:

// Balanced tree: O(n) (because one full level can be half the nodes)

// Worst case (skewed tree but narrow): O(1)

//Can use more memory in wide trees

function maxDepth3(root) {
    if (!root) return 0;

    let queue = [[root, 1]]; // store node + depth
    let maxDepth = 0;

    while (queue.length > 0) {
        let [node, depth] = queue.shift();

        if (node) {
            maxDepth = Math.max(maxDepth, depth);

            if (node.left) queue.push([node.left, depth + 1]);
            if (node.right) queue.push([node.right, depth + 1]);
        }
    }

    return maxDepth;
}

// 100. Same Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// if both nodes are null => true
// if one of the nodes in null || values are different => false
// => (l,l) && (r,r)
// Time: O(p + q), space: O(h) (h can be n in unbalanced tree like linked list and log n in balanced tree)
var isSameTree = function (p, q) {

    if (!p && !q) return true
    if ((!p || !q) || (p.val !== q.val)) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// создаем dummy node и tail,
// l1 <= l2 ? tail -> l1, двигаем l1
// else tail -> l2, двигаем l2
// двигаем tail
// l1 еще есть ? tail -> l1
// l2 еще есть ? tail -> l2
// возвращаем dummy.next

// O(n), O(1)
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-Infinity)
    let tail = dummy

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    if (l1) tail.next = l1
    else if (l2) tail.next = l2
    return dummy.next
}

// 15. 3Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
* res = []
 сортируем массив
 скипаем дубликаты
 2 pointers for 2 numbers + первое число
 скипаем дубликаты
*/
// Time: O(n^2), Space: O(n^2)
var threeSum = function (nums) {
    const res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        // skip duplicates
        if (i > 0 && nums[i - 1] === nums[i]) continue

        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r]
            if (threeSum > 0) r--
            else if (threeSum < 0) l++
            else {
                res.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] === nums[l - 1]) l++
            }
        }
    }
    return res
};

// Meeting Schedule
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false
// Explanation:

// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict
// Example 2:

// Input: intervals = [(5,8),(9,15)]

// Output: true
// Note:

// (0,8),(8,10) is not considered a conflict at 8
// Constraints:

// 0 <= intervals.length <= 500
// 0 <= intervals[i].start < intervals[i].end <= 1,000,000

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */
// Sotring, O(n log n), space: O(1) or O(n) depending on the sorting algo
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }
        return true;
    }
}
// brute force, O(n^2), O(1)
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;
        for (let i = 0; i < n; i++) {
            const A = intervals[i];
            for (let j = i + 1; j < n; j++) {
                const B = intervals[j];
                if (Math.min(A.end, B.end) > Math.max(A.start, B.start)) {
                    return false;
                }
            }
        }
        return true;
    }
}


// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false



// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
stack 
iterate through string, for each opening braket push closing braket to stack,
closing bracket !== bracket on stack top ? => false

=> stack.len === 0
 */
// O(n), O(n)
var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') stack.push(')')
        else if (char === '[') stack.push(']')
        else if (char === '{') stack.push('}')
        else if (char !== stack.pop()) return false
    }
    return stack.length === 0
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

// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



