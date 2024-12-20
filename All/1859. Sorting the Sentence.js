// 1859. Sorting the Sentence
// Solved
// Easy
// Topics
// Companies
// Hint
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.



// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.


// Constraints:

// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.

/**
 * @param {string} s
 * @return {string}
 */
// k is the number of words and is a constant, from 1 to 9
//time O(n * k logk) => O(n),space O(k) => O(1)
var sortSentence = function (s) {

    let arr = s.split(' ')

    arr.sort((word1, word2) => word1[word1.length - 1] - word2[word2.length - 1])

    return arr.map((word) => word.slice(0, word.length - 1)).join(' ')
};

