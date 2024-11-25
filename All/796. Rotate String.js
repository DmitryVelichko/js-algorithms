// 796. Rotate String
// Solved
// Easy
// Topics
// Companies
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.


// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false


// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//O(n^2), O(n)
var rotateString2 = function (s, goal) {
    if (s.length !== goal.length) return false
    let str = goal
    for (let i = 0; i < goal.length; i++) {
        if (s === str) return true
        let arr = str.split('')
        let popped = arr.pop()
        arr.unshift(popped)
        str = arr.join('')
    }
    return false
};
// O(n), O(n)
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    let str = s + s
    return str.includes(goal)
};