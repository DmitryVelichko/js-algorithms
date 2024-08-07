// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n), O(n)
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longestSeq = 0;

    for (let num of set) {
        // no left neighbour? it's a start of the seq
        if (!set.has(num - 1)) {
            let seqLen = 1;
            while (set.has(num + seqLen)) {
                seqLen += 1;
            }
            longestSeq = Math.max(longestSeq, seqLen);
        }
    }

    return longestSeq;

};