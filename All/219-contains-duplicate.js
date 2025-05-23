
// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const j = map.get(nums[i])

            if (Math.abs(j - i) <= k) {
                return true
            }
        }
        map.set(nums[i], i)
    }

    return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
