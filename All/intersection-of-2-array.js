// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var mySolution = function(nums1, nums2) {
    let ht = {}
    let set = new Set()
    let arr = []

    for(const num of nums1) {
        ht[num] = ht[num] || num;
    }

    for(const num of nums2) {
        if(num === ht[num]){
            set.add(num)
        }
    }
    
    arr = Array.from(set)
    return arr
};

var intersection = function(nums1, nums2) {
    const unique = new Set(nums1)
    return [...unique].filter((item) => nums2.indexOf(item) !== -1)
};