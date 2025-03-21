// 9. Palindrome Number
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
// O(n), O(n)
var isPalindrome = function (x) {
    let xStr = x.toString()
    let reversed = ''

    for (let num of xStr) {
        reversed = num + reversed;
    }
    return xStr === reversed
};

// reverse half of the number and compare it with the other half:
// O(log10(N)) → Because we're reducing x by a factor of 10 in each iteration.
// O(1) Space Complexity → Only a few integer variables are used.
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // Negative & numbers ending with 0 (except 0 itself) are not palindromes

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10); // Handles odd and even length numbers
};