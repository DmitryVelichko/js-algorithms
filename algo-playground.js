// 704. Binary Search
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
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

// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
2 pointers,
char is not alphaNumeric() ? l++ or r--
left char !== right char ? => false
=> true
}
*/
// O(n), O(1)
var isPalindrome = function (s) {

    function isAlphaNumeric(char) {
        const charCode = char.charCodeAt(0);
        return (
            '0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0) ||
            'a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0) ||
            'A'.charCodeAt(0) <= charCode && charCode <= 'Z'.charCodeAt(0)
        );
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {

        while (l < r && !isAlphaNumeric(s[l])) l++
        while (l < r && !isAlphaNumeric(s[r])) r--

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        l++;
        r--;
    }
    return true;
}

// str = str.replace

// var isPalindrome = function(s) {
//     let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
//     return newStr.split("").reverse().join("") === newStr ? true : false;
// };
//  226. Invert Binary Tree
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