// 3174. Clear Digits
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.



// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".



// Constraints:

// 1 <= s.length <= 100
// s consists only of lowercase English letters and digits.
// The input is generated such that it is possible to delete all digits.

/**
 * @param {string} s
 * @return {string}
 */
// O(n), O(n)
var clearDigits = function (s) {
    const stack = [];

    for (const char of s) {
        if (!isNaN(char)) {
            // If it's a digit, remove the top character from the stack (if it exists)
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // If it's not a digit, add it to the stack
            stack.push(char);
        }
    }

    // The stack contains the resulting characters
    return stack.join('');
};


/**
 * @param {string} s
 * @return {string}
 */
//O(n^2), O(n)
var clearDigits = function (s) {
    if (!s || s.trim === '') return ''

    const arr = s.split('')
    let i = 0

    while (i < arr.length) {
        if (!isNaN(arr[i])) {
            if (i > 0) {
                arr.splice(i - 1, 2);
                i = 0;
            } else {
                arr.splice(i, 1)
            }
        } else {
            i++
        }
    }
    return arr.join('')
};