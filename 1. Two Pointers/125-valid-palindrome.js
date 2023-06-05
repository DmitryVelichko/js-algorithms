// 125. Valid Palindrome
// Easy

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

// 0. Задача на 2 pointers
// 1. .replace(/regex/)
// 2. Создать два указателя
// 3. В цикле while сравнить буквы, вернуть false если не равны
// 4. l++, r--, вернуть true


var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9]/gi, '')
    let leftPointer = 0
    let rightPointer = s.length - 1

    while (leftPointer < rightPointer) {
        if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) return false
        leftPointer++
        rightPointer--
    }
    return true
};