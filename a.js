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

//https://www.youtube.com/watch?v=OxbxP5_-Tcs&ab_channel=PheezxCoding

var isValid = function(s) {

    const hashMap = {'(': ')', '{': '}', '[': ']'}
    
    const stack = []
    
    for(let ch of s) {
        if(hashMap[ch]) {
            //ch is an opening bracket
            stack.push(hashMap[ch])
        } else if(stack.length > 0 && stack[stack.length - 1] === ch) {
            // ch is a closing bracket and top of stack matches
            stack.pop()
        } else{
            // ch is a closing bracket and top of the stack doesn't match
            return false
        }
    }
     
     return stack.length === 0
 };