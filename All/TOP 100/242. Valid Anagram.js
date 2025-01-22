// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
   hashmap; different length? => false;

   iterate across one of the strings: {a: 0, b: 0}; a++, b--
   
   iterate across hash: value is not 0 ? return false

   return true

*/

// O(n), O(1)/O(k) - 24 буквы в алфавите
var isAnagram = function (s, t) {
    let hash = {}
    if (s.length !== t.length) return false
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 0
        if (!hash[t[i]]) hash[t[i]] = 0

        hash[s[i]]++
        hash[t[i]]--

    }

    for (let key in hash) {
        if (hash[key] !== 0) return false
    }
    return true
};