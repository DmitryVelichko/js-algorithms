// 383. Ransom Note
// Solved
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// O(n+m), O(1) + optimized ealry exit
var canConstruct = function (ransomNote, magazine) {
    const hash = {}

    for (let char of ransomNote) {
        hash[char] = (hash[char] || 0) + 1
    }

    for (let char of magazine) {
        if (char in hash) {
            hash[char] = hash[char] - 1

            if (hash[char] === 0) delete hash[char]
        }
        if (Object.keys(hash).length === 0) return true
    }


    return Object.keys(hash).length === 0
}

//O(n+m), O(1) - Less optimized without early exit


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let hash = {}

    for (let letter of magazine) {
        if (hash[letter] === undefined) hash[letter] = 1
        else (hash[letter]++)
    }
    for (let letter of ransomNote) {
        if (letter in hash && hash[letter] !== 0) hash[letter] -= 1
        else return false
    }
    return true
};