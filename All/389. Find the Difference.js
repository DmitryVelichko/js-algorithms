// 389. Find the Difference
// Easy
// 4.7K
// 457
// Companies
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.



// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"


// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// O(n), O(1)
var findTheDifference = function (s, t) {
    const hash = {}
    for (let char of t) {
        hash[char] = (hash[char] || 0) + 1
    }

    for (let char of s) {
        if (char in hash) {
            hash[char] = --hash[char]
            if (hash[char] === 0) delete hash[char]
        }
    }
    for (let char of Object.keys(hash)) {
        return char
    }
};
