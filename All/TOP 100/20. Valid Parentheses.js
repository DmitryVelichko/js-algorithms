// 20. Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true



// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
/**
stack 
iterate through string, for each opening braket push closing braket to stack,
closing bracket !== bracket on stack top ? => false

=> stack.len === 0
 */
// O(n), O(n)
var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') stack.push(')')
        else if (char === '[') stack.push(']')
        else if (char === '{') stack.push('}')
        else if (stack.pop() !== char) return false
    }
    return stack.length === 0
};