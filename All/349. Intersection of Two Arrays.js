// 349. Intersection of Two Arrays
// Solved
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(n+m), O(k1+k2), k is the number of unique elements in set
var intersection = function (nums1, nums2) {
    const set = new Set(nums1)
    const res = []
    for (let num of new Set(nums2)) {
        if (set.has(num)) res.push(num)
    }
    return res
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(n+m), O(n + min(n,m))
var intersection = function (nums1, nums2) {
    let hash = {}
    const res = []

    for (let num of nums1) {
        hash[num] = (hash[num] || 0) + 1
    }

    for (let num of nums2) {
        if (hash[num]) {
            res.push(num)
            delete hash[num]
        }
    }

    return res

};