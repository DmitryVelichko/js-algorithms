// 22. Generate Parentheses
// Medium

// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n) {
    const res = [];
  
    function backtrack(open_n, closed_n, str) {
      // Valid if open === close === n
      if (open_n === closed_n && closed_n === n) {
        res.push(str);
        return;
      }
