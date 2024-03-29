// 859. Buddy Strings
// Easy
// 2K
// 1.2K
// Companies
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false

    if(s === goal) {
        let set = new Set()
        for(let i=0; i<s.length; i++) {
            set.add(s.charAt(i))
        }
        return set.size < s.length
    }
    let diff = []
        for(let i=0; i<s.length; i++){
        if(s.charAt(i) !== goal.charAt(i)) {
            diff.push(i)
        }
    }

    return diff.length === 2 && s.charAt(diff[0]) === goal.charAt(diff[1]) && s.charAt(diff[1]) === goal.charAt(diff[0])
};