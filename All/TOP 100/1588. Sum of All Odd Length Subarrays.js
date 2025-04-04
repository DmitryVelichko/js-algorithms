// 1588. Sum of All Odd Length Subarrays
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.



// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66


// Constraints:

// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000


// Follow up:

// Could you solve this problem in O(n) time complexity?



/**
* @param {number[]} arr
* @return {number}
*/

// O(n), O(1)
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let leftCount = i + 1;  // Ways to choose left boundary
        let rightCount = n - i; // Ways to choose right boundary

        let totalSubarrays = leftCount * rightCount;
        let oddSubarrays = Math.ceil(totalSubarrays / 2);

        sum += arr[i] * oddSubarrays;
    }

    return sum;
};

// O(n^3), O(n)
var sumOddLengthSubarrays = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let arr2 = []
        for (let j = i; j < arr.length; j++) {
            arr2.push(arr[j])
            if (arr2.length % 2 !== 0) sum += arr2.reduce((acc, curr) => acc + curr, 0)
        }
    }
    return sum
};