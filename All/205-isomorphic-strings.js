// 205. Isomorphic Strings
// Easy

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false // egg, add, e
    let sMap = {} //e:a
    let tMap = {}//a:e
    for(let i = 0; i<s.length; i++) {
        sChar = s[i] //e
        tChar = t[i] //a

        if(sMap[sChar] === undefined) {
            sMap[sChar] = tChar;
        }

        if(tMap[tChar] === undefined) {
            tMap[tChar] = sChar;
        }

        if(sMap[sChar] !== tChar || tMap[tChar] !== sChar) return false
    }

    return true
};