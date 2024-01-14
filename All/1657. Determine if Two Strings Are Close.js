// 1657. Determine if Two Strings Are Close
// Solved
// Medium
// Topics
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
 

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // Function to get the frequency of characters in a word
    const getFrequency = (word) => {
        const frequency = {};
        for (let char of word) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return frequency;
    };

    // Get the frequency of characters for both words
    const freq1 = getFrequency(word1);
    const freq2 = getFrequency(word2);

    // Check if both words have the same unique characters
    const unique1 = new Set(word1);
    const unique2 = new Set(word2);
    if (unique1.size !== unique2.size) return false;

    for (let char of unique1) {
        if (!unique2.has(char)) return false;
    }

    // Check if the distribution of frequencies is the same
    const values1 = Object.values(freq1).sort((a, b) => a - b);
    const values2 = Object.values(freq2).sort((a, b) => a - b);

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false;
    }

    return true;
};