/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

// O(n^2) т.к. strings are immutable ??? или O(n), space: O(n)
var isPrefixString = function (s, words) {

    let res = ''
    for (let word of words) {
        res += word
        if (res === s) return true
    }
    return false
};

// O(n), space: O(1)
var isPrefixString = function (s, words) {
    let index = 0;

    for (let word of words) {
        for (let char of word) {
            if (index >= s.length || s[index] !== char) {
                return false;
            }
            index++;
        }
        if (index === s.length) {
            return true; // We've matched the entire string `s`.
        }
    }

    return false; // If we've exhausted `words` and haven't matched `s`.
};