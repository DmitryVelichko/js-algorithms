// Contains Duplicate

// Solution
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === a) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]) + ' TRUE');
console.log(containsDuplicate([1, 2, 3, 4, 5]) + ' FALSE');
