// 238. Product of Array Except Self
// Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProduct = []
    let rightProduct = []
    let solution = []

    // Populate leftProduct
    for(let i=0; i<nums.length; i++) {
        if(leftProduct.length === 0) {
            leftProduct.push(1)
        } else {
            leftProduct.push(leftProduct[i-1] * nums[i-1])
        }
    }

     // Populate rightProduct
    for(let i=nums.length-1; i>-1; i--) {
        if(rightProduct.length === 0) {
            rightProduct.push(1)
        } else {
            rightProduct.unshift((rightProduct[0] * nums[i+1]))
        }
    }

     // Populate solution
    for(let i=0; i<leftProduct.length; i++) {
        solution.push(leftProduct[i] * rightProduct[i])
    }

    return solution
};