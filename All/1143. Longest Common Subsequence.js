// 1143. Longest Common Subsequence
// Attempted
// Medium
// Topics
// Companies
// Hint
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

function longestCommonSubsequence(text1, text2) {
    // Get the lengths of the input strings
    const m = text1.length;
    const n = text2.length;

    // Create a 2D DP table to store the length of the common subsequence
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill in the DP table using a bottom-up approach
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If the characters match, extend the common subsequence
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, take the maximum from the previous row or column
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The last cell of the DP table contains the length of the longest common subsequence
    return dp[m][n];
}

// Example usage:
const text1 = "abcde";
const text2 = "ace";
const result = longestCommonSubsequence(text1, text2);
console.log(result);  // Output: 3

