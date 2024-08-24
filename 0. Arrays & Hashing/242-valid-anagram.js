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

/**
    Если 2 строки s и t анаграммы возвращаем true, false если нет

    // O(n), O(1)/O(k) - 24 буквы в алфавите

    hash = {}

    длина s и t разная? return false

    for(i < s.length)
        // если буквы из s нет в хэше инициализируем нулем
        if (hash[t[i]] === undefined) hash[t[i]] = 0

        хэш[буква из s]++
        хэш[буква из t]--
    
    for(key in hash)
        if (hash[key] !==0) return false

    return true

 */

 // O(n), O(1)/O(k) - 26 букв в алфавите
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