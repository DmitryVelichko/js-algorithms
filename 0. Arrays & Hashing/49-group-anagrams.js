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


var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let arr = new Array(26).fill(0);
        for (let char of str) arr[char.charCodeAt() - 'a'.charCodeAt()]++;


        let key = arr.join(' ');
        map[key] ? map[key].push(str) : map[key] = [str];

    }
    let arr2 = [];
    for (let key in map) {
        arr2.push(map[key]);
    }
    return arr2;
};


// Неоптимальный. Time O(N * (K * log(K)))

// var groupAnagrams = function (strs) {
//     let map = {}
//     for(let str of strs) {
//         let sortedStr = str.split('').sort().join('')
//         if(!map[sortedStr]) {
//             map[sortedStr] = [str]
//         } else {
//             map[sortedStr].push(str)
//         }
//     }
//     return Object.values(map)
// }
