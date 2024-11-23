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

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number[]}
//  */
// var selfDividingNumbers = function (left, right) {
//     const res = []
//     for (let i = left; i <= right; i++) {
//         let num = i
//         let flag = true

//         while (num) {
//             let digit = num % 10
//             if (digit === 0 || i % digit !== 0) {
//                 flag = false;
//                 break;
//             }
//             num = Math.floor(num / 10)
//         }
//         if (flag) res.push(i)
//     }
//     return res
// };


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function isDivisibleByChar(i) {
    for (let char of i) {
        if (Number(char) === 0 || i % Number(char) !== 0) {
            return false
        }
    }
    return true

}
var selfDividingNumbers = function (left, right) {
    const res = []
    for (let i = left; i <= right; i++) {

        if (isDivisibleByChar(String(i))) res.push(i)

    }
    return res
};