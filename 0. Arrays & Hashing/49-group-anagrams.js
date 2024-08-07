// 49. Group Anagrams
// Medium

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time O(N * K) | Space O(N * K)
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array


/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 // O(n*k), O(n*k) т.к. hashmap массивов
 var groupAnagrams = function(strs) {

    const anagramGroups = {};

    for (let str of strs) {
        // [1,0,0,0,1,0,0,0,0,0,0,1]
        const count = new Array(26).fill(0);
        // 98 - 97 = ячейка в массиве
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Convert the count array to a string key
        const key = count.join('#');
        console.log(key)

       
        if (!anagramGroups[key]) {
            anagramGroups[key] = [str];
        } else {
            anagramGroups[key].push(str);
        }
    }

    return Object.values(anagramGroups);
};