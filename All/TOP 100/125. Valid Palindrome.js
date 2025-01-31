// 125. Valid Palindrome
// Solved
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
2 pointers,
char is not alphaNumeric() ? l++ or r--
left char !== right char ? => false
=> true
}
*/
// O(n), O(1)
var isPalindrome = function (s) {

    function isAlphaNumeric(char) {
        const charCode = char.charCodeAt(0);
        return (
            '0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0) ||
            'a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0) ||
            'A'.charCodeAt(0) <= charCode && charCode <= 'Z'.charCodeAt(0)
        );
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {

        while (l < r && !isAlphaNumeric(s[l])) l++
        while (l < r && !isAlphaNumeric(s[r])) r--

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        l++;
        r--;
    }
    return true;
}

// str = str.replace

// var isPalindrome = function(s) {
//     let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
//     return newStr.split("").reverse().join("") === newStr ? true : false;
// };