// 680. Valid Palindrome II
// Easy
// 7.9K
// 404
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let low = 0
    let high = s.length - 1
    while(low<high) {
        if(s[low] !== s[high]) {
            return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1)
        }
        low++
        high--
    }
    return true
};

function isPalindrome(str, low, high) {
    while(low<high) {
        if(str[low] !== str[high]) return false
        low++
        high--
    }
    return true
}