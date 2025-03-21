// 728. Self Dividing Numbers
// Solved
// Easy
// Topics
// Companies
// Hint
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]
 

// Constraints:

// 1 <= left <= right <= 104
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 262.8K
// Submissions
// 332.1K
// Acceptance Rate
// 79.1%
// Topics
// Companies
// Hint 1
// For each number in the range, check whether it is self dividing by converting that number to a character array (or string in Python), then checking that each digit is nonzero and divides the original number.
