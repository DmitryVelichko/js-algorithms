
// Code
// Testcase
// Test Result
// Test Result
// 33. Search in Rotated Sorted Array
// Solved
// Medium
// Topics
// Companies
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

/**
 *
binary search

1 function findPivotIndex (binary search)
// If mid element is less than the first element, pivot is on the left
if (nums[mid] < nums[0]); return left;

2 function binarySearch = (nums, target, left, right) 

3 // Perform binary search in the appropriate part of the array
(target >= nums[0]) ? binarySearch(nums, target, 0, pivot - 1)
                    : binarySearch(nums, target, pivot, nums.length - 1)

 */
 // O(log n), O(1)
var search = function (nums, target) {
    // Step 1: Find the pivot index
    const findPivot = (nums) => {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            // If mid element is less than the first element, pivot is on the left
            if (nums[mid] < nums[0]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    };
    
    const binarySearch = (nums, target, left, right) => {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };
    
    const pivot = findPivot(nums);
    
    // Step 2: Perform binary search in the appropriate part of the array
    if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot - 1);
    } else {
        return binarySearch(nums, target, pivot, nums.length - 1);
    }
};