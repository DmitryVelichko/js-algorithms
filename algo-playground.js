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

// 239. Sliding Window Maximum
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time: O(k*(n-k)) or ~O(n^2), space: O(n)
var maxSlidingWindowBruteForce = function (nums, k) {
    let l = 0;
    let max = []
    for (let r = k - 1; r < nums.length; r++) {
        let maxNum = -Infinity
        for (let i = l; i <= r; i++) {
            maxNum = Math.max(maxNum, nums[i])
        }
        max.push(maxNum)
        l++
    }
    return max
};

// O(n), O(n)
function maxSlidingWindow(nums, k) {
    const res = []
    const deque = new Deque();
    let l = 0
    let r = 0

    while (r < nums.length) {
        // pop smaller numbers from deque
        while (deque.size() && nums[deque.back()] < nums[r]) {
            deque.popBack();
        }
        deque.pushBack(r);

        // remove left number from window
        if (l > deque.front()) {
            deque.popFront();
        }

        if (r + 1 >= k) {
            res[l] = nums[deque.front()];
            l++;
        }
        r++;
    }

    return res;
}

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
// Easy

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
