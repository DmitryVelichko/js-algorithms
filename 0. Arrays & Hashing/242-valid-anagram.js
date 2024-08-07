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


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 0. Задача на map(Arrays and Hashing)
// 1. Сравнить длину s и t
// 2. Создать мапу
// 3. инициализировать нулем, прибавлять и вычитать
// 4. во втором цикле for in проверить, map[key] !== 0


// Time O(n), Space O(1) так как 26 lower case letters в алфавите

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // O(n), O(1)/O(k) - 24 буквы в алфавите
 var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const hash = {}

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) hash[s[i]] = 0
        if (hash[t[i]] === undefined) hash[t[i]] = 0

        hash[s[i]]++
        hash[t[i]]--
    }

    for (let key in hash) {
        if (hash[key] !== 0) return false
    }
    return true
};