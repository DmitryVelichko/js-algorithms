// 11. Container With Most Water
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
 /**
* 2 pointers at beginning and at the end
calculate the area, update maximum area and move the shortest height forward/inward
 */
// O(n), O(1)
var maxArea = function (height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area)
        if (height[l] < height[r]) {
            l++;
        } else {
            r--
        }
    }

    return res;
};