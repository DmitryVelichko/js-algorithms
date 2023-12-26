// 520. Detect Capital
// Easy

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper = word.toUpperCase();
    let lower = word.toLowerCase();

    if (word === upper || word === lower) {
        return true;
    }

    if (word[0] === upper[0] && word.slice(1) === lower.slice(1)) {
        return true;
    }

    return false;
};
