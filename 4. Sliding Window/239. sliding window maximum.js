// 239. Sliding Window Maximum
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time: O(k*(n-k)) or ~O(n^2), space: O(n)
var maxSlidingWindowBruteForce = function (nums, k) {
    let l = 0;
    let max = []
    for (let r = k - 1; r < nums.length; r++) {
        let maxNum = -Infinity
        for (let i = l; i <= r; i++) {
            maxNum = Math.max(maxNum, nums[i])
        }
        max.push(maxNum)
        l++
    }
    return max
};

// O(n), O(n)
function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const output = new Array(n - k + 1);
    const q = new Deque();
    let l = 0,
        r = 0;

    while (r < n) {
        while (q.size() && nums[q.back()] < nums[r]) {
            q.popBack();
        }
        q.pushBack(r);

        if (l > q.front()) {
            q.popFront();
        }

        if (r + 1 >= k) {
            output[l] = nums[q.front()];
            l++;
        }
        r++;
    }

    return output;
}