// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

let singleNumber2 = function (nums) {
    let ht = {}
    for (const num of nums) {
        ht[num] = (ht[num] || 0) + 1;
    }

    for (const key in ht) {
        if (ht[key] === 1) {
            return key;
        }
    }
};
