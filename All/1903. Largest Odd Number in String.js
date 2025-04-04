// 1903. Largest Odd Number in String
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.



// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.


// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

/**
 * @param {string} num
 * @return {string}
 */
// O(n), O(1)
var largestOddNumber = function (num) {
    // Traverse the string from the end to find the first odd digit
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            // Return the substring from the start to this index
            return num.slice(0, i + 1);
        }
    }
    // If no odd digit is found, return an empty string
    return "";
};
