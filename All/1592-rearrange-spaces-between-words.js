// 1592. Rearrange Spaces Between Words
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.



// Example 1:

// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.
// Example 2:

// Input: text = " practice   makes   perfect"
// Output: "practice   makes   perfect "
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.


// Constraints:

// 1 <= text.length <= 100
// text consists of lowercase English letters and ' '.
// text contains at least one word.

/**
 * @param {string} text
 * @return {string}
 */
// O(n), O(n)
var reorderSpaces = function (text) {

    // Count total spaces and split words
    let totalSpaces = text.split('').filter(char => char === ' ').length;
    let words = text.trim().split(/\s+/);
    let numWords = words.length;

    // If there's only one word, return it followed by all spaces
    if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
    }

    // Calculate spaces between words and extra spaces
    let spacesBetween = Math.floor(totalSpaces / (numWords - 1));
    let extraSpaces = totalSpaces % (numWords - 1);

    // Join words with calculated spaces and add extra spaces at the end
    let result = words.join(' '.repeat(spacesBetween)) + ' '.repeat(extraSpaces);

    return result;
}
