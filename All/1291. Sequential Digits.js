// 1291. Sequential Digits
// Medium
// Topics
// Companies
// Hint
// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
 

// Constraints:

// 10 <= low <= high <= 10^9

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

function sequentialDigits(low, high) {
    const arr = [];

    for (let i = 1; i <= 9; ++i) {
        let num = i;
        let nextDigit = i + 1;

        while (num <= high && nextDigit <= 9) {
            num = num * 10 + nextDigit;
            if (low <= num && num <= high) {
                arr.push(num);
            }
            ++nextDigit;
        }
    }

    arr.sort((a, b) => a - b);
    return arr;
}


console.log(sequentialDigits(100, 300)) // [123,234]