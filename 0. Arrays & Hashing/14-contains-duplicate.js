// 49. Group Anagrams
// Solved
// Medium
// Topics
// Companies
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
/**
Дан массив строк, вернуть массив сгруппированных анаграмм

// O(n*k), O(n*k) т.к. hashmap массивов

hash = {}

for(str of strs):
   const arr = [26 нулей]

   for(char of str): [1,0,0,1,0,1...] 

   key = arr.join('#');
   
   hash пуст? hash[key] = [str];
   hash[key].push(str);
    
return Object.values(hash);    
*/

// O(n*k), O(n*k) т.к. hashmap массивов
var groupAnagrams = function (strs) {

    const hash = {};

    for (let str of strs) {
        // [1,0,0,0,1,0,0,0,0,0,0,1]
        const arr = new Array(26).fill(0);
        // 98 - 97 = ячейка в массиве
        for (let char of str) {
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Convert the count array to a string key
        const key = arr.join('#');

        if (!hash[key]) {
            hash[key] = [str];
        } else {
            hash[key].push(str);
        }
    }

    return Object.values(hash);
};