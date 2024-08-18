/**
 * @param {number[]} nums
 * @return {number}
 */
// O(log n), O(1)
// binary search 2 pointers

/**
 Is array sorted? return smallest val to the left

compare middle val and save to result

 l    m        r
 [3,4,5,     1,2]
 middle > left value? Searching in right sorted arr
 else searcing in left sorted arr
 */
 var findMin = function (nums) {
    let res = nums[0]
    let l = 0
    let r = nums.length - 1

