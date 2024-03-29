// 1437. Check If All 1's Are at Least Length K Places Away
// Easy
// 611
// 221
// Companies
// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

// Example 1:


// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:


// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let cur = k;
    for (const n of nums) {
      if (n === 0) { ++cur; continue; }
      if (cur < k) return false;
      cur = 0;
    }
    return true;
};

console.log(kLengthApart([1,0,0,1,0,1],2)) 