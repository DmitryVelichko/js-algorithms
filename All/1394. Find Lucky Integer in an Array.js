// 1394. Find Lucky Integer in an Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.



// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.


// Constraints:

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500

/**
 * @param {number[]} arr
 * @return {number}
 */

// O(n), O(1)
/**
* @param {number[]} arr
* @return {number}
*/
var findLucky = function (arr) {
    const freq = new Array(501).fill(0); // Fixed-size array for frequencies

    for (let num of arr) {
        freq[num]++; // Count frequencies
    }

    let res = -1;
    for (let i = 1; i <= 500; i++) {
        if (freq[i] === i) {
            res = i; // Update the result with the largest lucky number
        }
    }

    return res;
};
