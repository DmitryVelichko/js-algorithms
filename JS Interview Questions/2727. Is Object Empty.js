// 2727. Is Object Empty
// Solved
// Easy
// Companies
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.



// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.


// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105


// Can you solve it in O(1) time?

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// Object.keys(obj) iterates all keys internally, so technically it’s O(n), not O(1).
var isEmpty = function (obj) {
    return Object.keys(obj).length === 0
}
// O(1)
var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        // For arrays, check length directly (O(1))
        return obj.length === 0;
    } else {
        // For objects, check if any key exists
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false; // Found a key, not empty
            }
        }
        return true; // No keys found
    }
};
