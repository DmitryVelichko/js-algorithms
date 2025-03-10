// 859. Buddy Strings
// Solved
// Easy
// Topics
// Companies
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".


// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.


// Constraints:

// 1 <= s.length, goal.length <= 2 * 104
// s and goal consist of lowercase letters.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// O(n), O(1)
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        let charSet = new Set(s);
        return charSet.size < s.length; // Check if there's at least one duplicate character
    }

    let diffs = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diffs.push(i);
        if (diffs.length > 2) return false; // More than 2 differences means swapping won't work
    }

    return diffs.length === 2 &&
        s[diffs[0]] === goal[diffs[1]] &&
        s[diffs[1]] === goal[diffs[0]];
};


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// O(n^2), O(n)

var buddyStrings1 = function (s, goal) {
    if (s.length !== goal.length) return false;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let arr = s.split('');

            //  [arr[i], arr[j]] = [arr[j], arr[i]];
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            if (arr.join('') === goal) return true;
        }
    }
    return false;
};

