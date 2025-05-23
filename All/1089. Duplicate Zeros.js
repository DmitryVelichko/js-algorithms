// 1089. Duplicate Zeros
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.



// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// O(n^2), O(1)
var duplicateZeros = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++
        }
    }
};
// O(n), O(1)
var duplicateZeros = function (arr) {
    let zeroes = arr.filter(x => x === 0).length;


    for (let i = arr.length - 1; i >= 0; i--) {
        if (i + zeroes < arr.length) {
            arr[i + zeroes] = arr[i];
        }
        if (arr[i] === 0) {
            zeroes--;
            if (i + zeroes < arr.length) {
                arr[i + zeroes] = 0;
            }
        }
    }
};