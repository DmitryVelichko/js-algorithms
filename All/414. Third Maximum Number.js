// 414. Third Maximum Number
// Easy

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Follow up: Can you find an O(n) solution?


/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n), O(k) where k is the number of unique elements
var thirdMax = function (nums) {
    const set = new Set(nums)
    const arr = [...set]
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = arr[i]

        } else if (arr[i] > max2) {
            max3 = max2
            max2 = arr[i]
        } else if (arr[i] > max3) {
            max3 = arr[i]
        }
    }
    return (max3 === -Infinity) ? max1 : max3
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    if (nums.length < 3) return Math.max(...nums);
    let u = new Set(nums)
    if (u.size < 3) return Math.max(...u);

    for (let i = 0; i < 2; i++) {
        u.delete(Math.max(...u))
    }

    return Math.max(...u);
};