// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// O(n), O(1)/O(k) - 26 букв в алфавите
/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/

/**
    hash, different length? => false

    iterate across one of the strings: {a: 0, b: 0}; a++, b--
    
    iterate across hash: value it not 0 ? return false

    return true

 */

// O(n), O(1)/O(k) т.к. 24 буквы в алфавите
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let hash = {}

    for (let i = 0; i < s.length; i++) {

        hash[s[i]] = (hash[s[i]] || 0) + 1
        hash[t[i]] = (hash[t[i]] || 0) - 1
    }

    for (let key in hash) {
        if (hash[key] !== 0) return false
    }

    return true
};