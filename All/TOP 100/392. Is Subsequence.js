// 392. Is Subsequence
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n), O(1)
var isSubsequence = function (s, t) {
    let i = 0; // Pointer for `s`

    for (let char of t) {
        if (s[i] === char) {
            i++; // Move `s` pointer when we find a match
        }
        if (i === s.length) return true; // If we matched all characters, return true
    }

    return i === s.length; // If `i` reached the end of `s`, it's a subsequence
};

//follow up:
// O(m log n), O(n)
var createIndexMap = function (t) {
    const indexMap = new Map();

    for (let i = 0; i < t.length; i++) {
        if (!indexMap.has(t[i])) indexMap.set(t[i], []);
        indexMap.get(t[i]).push(i);
    }

    return indexMap;
};

var isSubsequence = function (s, tIndexMap) {
    let prevIndex = -1; // Last matched character index in `t`

    for (let char of s) {
        if (!tIndexMap.has(char)) return false; // Character not in `t`

        let indices = tIndexMap.get(char);
        let pos = binarySearch(indices, prevIndex);

        if (pos === indices.length) return false; // No valid next index found
        prevIndex = indices[pos]; // Move to the next index
    }

    return true;
};




