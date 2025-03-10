// 1309. Decrypt String from Alphabet to Integer Mapping
// Easy
// Topics
// Companies
// Hint
// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.



// Example 1:

// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#"
// Output: "acz"


// Constraints:

// 1 <= s.length <= 1000
// s consists of digits and the '#' letter.
// s will be a valid string such that mapping is always possible.

/**
 * @param {string} s
 * @return {string}
 */
// O(n), O(n)
var freqAlphabets = function (s) {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') {
            let num = parseInt(s.slice(i - 2, i)); // Get two digits before #
            result.push(String.fromCharCode(96 + num));
            i -= 2; // Skip the processed digits
        } else {
            let num = parseInt(s[i]); // Single digit
            result.push(String.fromCharCode(96 + num));
        }
    }
    return result.reverse().join(''); // Reverse the result to correct the order
}
