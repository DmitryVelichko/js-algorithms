// Contains Duplicate

// Solution
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Time - O(n), space - O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
    let map = {}
    for (let num of nums) {
        if (map[num] !== undefined) {
            return true
        } else {
            map[num] = num
        }
    }
    return false
}

// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let a = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === a) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([2, 14, 18, 22, 22]) + ' TRUE');
// console.log(containsDuplicate([1, 2, 3, 4, 5]) + ' FALSE');

// function hashSolution(nums) {
//   let testObj = {};
//   for (var i = 0; i < nums.length; i++) {
//     let aNum = nums[i];
//     if (testObj[aNum]) {
//       return true;
//     } else {
//       testObj[aNum] = true;
//     }
//   }

//   return false;
// }

// function setSizeSolution(nums) {
//   let testSet = new Set(nums);
//   return testSet.size !== nums.length;
// }
// function setHasSolution(nums) {
//   let set = new Set();
//   for (i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     }

//     set.add(nums[i]);
//   }
//   return false;
// }
