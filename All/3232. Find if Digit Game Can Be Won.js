// 3232. Find if Digit Game Can Be Won
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,10]

// Output: false

// Explanation:

// Alice cannot win by choosing either single-digit or double-digit numbers.

// Example 2:

// Input: nums = [1,2,3,4,5,14]

// Output: true

// Explanation:

// Alice can win by choosing single-digit numbers which have a sum equal to 15.

// Example 3:

// Input: nums = [5,5,5,25]

// Output: true

// Explanation:

// Alice can win by choosing double-digit numbers which have a sum equal to 25.

 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 99
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n), O(n)
var canAliceWin1 = function (nums) {
    let single = []
    let double = []
    for (let num of nums) {
        if (num >= 10) double.push(num)
        else single.push(num)
    }

    const sin = single.reduce((acc, curr) => acc + curr, 0)
    const doub = double.reduce((acc, curr) => acc + curr, 0)

    if (sin > doub || doub > sin) return true
    else return false
};
// O(n), O(1)
var canAliceWin = function (nums) {
    let single = 0
    let double = 0

    for (let num of nums) {
        if (num < 10) single += num
        else double += num
    }

    return (double > single || single > double)
};