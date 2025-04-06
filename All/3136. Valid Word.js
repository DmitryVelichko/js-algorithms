// 3136. Valid Word
// Solved
// Easy
// Topics
// Companies
// Hint
// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.


// Example 1:

// Input: word = "234Adas"

// Output: true

// Explanation:

// This word satisfies the conditions.

// Example 2:

// Input: word = "b3"

// Output: false

// Explanation:

// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:

// Input: word = "a3$e"

// Output: false

// Explanation:

// This word contains a '$' character and does not have a consonant.



// Constraints:

// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.

/**
 * @param {string} word
 * @return {boolean}
 */
// O(n), O(1)
var isValid = function (word) {
    if (word.length < 3) return false
    if (/[^a-zA-Z0-9]/.test(word)) return false
    return /[aeiouAEIOU]/.test(word) && /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)
};

/**
 * @param {string} word
 * @return {boolean}
 */
// O(n), O(1)
var isValid2 = function (word) {
    if (word.length < 3) return false
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let consonant = false
    let vowel = false
    function isDigit(char) {
        return (char >= '0' && char <= '9')
    }

    for (let char of word) {
        if (set.has(char)) vowel = true
        else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) consonant = true
        else if (!isDigit(char)) return false
    }
    return vowel && consonant
};