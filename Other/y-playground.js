// /**
//  * @param {number[]} nums
//  */
// var Solution = function(nums) {
//     this.nums = nums;
// };

// /**
//  * @return {number[]}
//  */
// Solution.prototype.reset = function() {
//     return this.nums
// };

// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // Implementing Fisher-Yates Algo
    
    const shuffled = this.nums.slice()
    const n = shuffled.length
    for(let i=shuffled.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
