// 1037. Valid Boomerang
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array points where points[i] = [xi, yi] represents a point on the X - Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.



//     Example 1:

// Input: points = [[1, 1], [2, 3], [3, 2]]
// Output: true
// Example 2:

// Input: points = [[1, 1], [2, 2], [3, 3]]
// Output: false


// Constraints:

// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100

/**
 * @param {number[][]} points
 * @return {boolean}
 */
// O(1), O(1)
var isBoomerang = function (points) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    // Calculate the area of the triangle using the determinant method
    const area = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);


    return area !== 0;
};

