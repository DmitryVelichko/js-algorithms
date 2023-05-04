// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

//Time: O(n), Space: O(n), if the string is '(((((((', the stack
// will end up having the size equal to the string.

var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') {
            stack.push(')')
        } else if (char === '[') {
            stack.push(']')
        } else if (char === '{') {
            stack.push('}')
        } else if (char !== stack.pop()) {
            return false
        }
    }
    return stack.length === 0
};