// 567. Permutation in String
// Medium
// 10.1K
// 322
// Companies
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map()
    for(let char of s1) {
        if(!map.has(char)) map.set(char, 0)
        map.set(char, map.get(char) + 1)
    }

    for(let i=0; i<= s2.length - s1.length; i++) {
        let tmp = new Map(map)
        let j = 0

        for(j=i; j<i+s1.length; j++) {
            let char = s2[j]
            if(tmp.has(char) && tmp.get(char) > 0) {
                tmp.set(char, tmp.get(char)-1)
            }
            else break
        }
        if(j == i+s1.length) return true

}
return false
};