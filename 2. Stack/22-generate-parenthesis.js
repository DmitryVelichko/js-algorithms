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
  
  


  // Time Complexity:

// The code uses a backtracking algorithm to generate all possible valid combinations of parentheses.
// The backtracking algorithm is called recursively, and the number of recursive calls depends on the value of n.
// For each recursive call, there are two recursive branches: one for adding an open parenthesis and one for adding a closed parenthesis.
// The number of recursive calls doubles with each level of recursion, resulting in a total of 2^n function calls.
// Therefore, the time complexity of the code is O(2^n), where n is the input value.
// Space Complexity:

// The code uses a result array res to store the generated combinations of parentheses. The size of this array depends on the number of valid combinations, which is determined by n.
// In the worst case, the number of valid combinations can be represented by the n-th Catalan number, which is given by the formula (2n)! / ((n+1)! * n!).
// The space required to store all valid combinations is proportional to the number of valid combinations, resulting in a space complexity of O((2n)! / ((n+1)! * n!)).
// However, if we consider only the space used by the result array res itself, the space complexity can be simplified to O(C_n), where C_n is the n-th Catalan number.
// In summary, the time complexity of the code is O(2^n), and the space complexity is O(C_n) or O((2n)! / ((n+1)! * n!)).