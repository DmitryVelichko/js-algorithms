// 500. Keyboard Row
// Easy

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".



// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]


// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let row1 = new Set('qwertyuiop')
    let row2 = new Set('asdfghjkl')
    let row3 = new Set('zxcvbnm')

    function helper(word, row) {
        for (let char of word) {
            if (!row.has(char.toLowerCase())) return false
        }
        return true
    }

    let res = []
    for (let word of words) {
        if (helper(word, row1) || helper(word, row2) || helper(word, row3)) {
            res.push(word)
        }
    }
    return res
}