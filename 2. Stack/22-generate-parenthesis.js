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
  
      // Only add open parenthesis if open < n
      if (open_n < n) {
        backtrack(open_n + 1, closed_n, str + '(');
      }
  
      // Only add closed parenthesis if close < open
      if (closed_n < open_n) {
        backtrack(open_n, closed_n + 1, str + ')');
      }
    }
  
    backtrack(0, 0, '');
    return res;
  }
  
  
  // var generateParenthesis = function(n) {
  //   const stack = [];
  //   const res = [];
  
  //   function backtrack(openN, closedN) {
  //     if (openN === closedN && closedN === n) {
  //       res.push(stack.join(''));
  //       return;
  //     }
  
  //     if (openN < n) {
  //       stack.push('(');
  //       backtrack(openN + 1, closedN);
  //       stack.pop();
  //     }
  //     if (closedN < openN) {
  //       stack.push(')');
  //       backtrack(openN, closedN + 1);
  //       stack.pop();
  //     }
  //   }
  
  //   backtrack(0, 0);
  //   return res;
  // }
  