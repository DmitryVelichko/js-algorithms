// 645. Set Mismatch
// Solved
// Easy
// Topics
// Companies
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104


var findErrorNums = function(nums) {
    // Initialize variables to store duplicate and missing numbers
    let dup = -1, missing = -1;

    // Create a HashMap to store the frequency of each number
    const numFrequency = new Map();

    // Iterate through the array to populate the HashMap
    for (const num of nums) {
        numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
    }

    // Iterate from 1 to the length of the array
    for (let i = 1; i <= nums.length; i++) {
        // Check if the current number is a duplicate
        if (numFrequency.get(i) === 2) {
