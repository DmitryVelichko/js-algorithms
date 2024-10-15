// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 
// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// var wordPattern = function(pattern, str) {
//     const mapCharToWord = {};
//     const mapWordToChar = {};

//     pattern = pattern.split('');
//     str = str.split(' ');
    
//     if(pattern.length !== str.length) return false;
    
//     for(let i = 0; i < str.length; i++) {
//         let curWord = str[i];
//         let curLetter = pattern[i];

//         if(mapCharToWord[curLetter] !== undefined && mapCharToWord[curLetter] !== curWord) return false;

//         if(mapWordToChar[curWord] !== undefined && mapWordToChar[curWord] !== curLetter) return false;
        
//         mapWordToChar[curWord] = curLetter;
//         mapCharToWord[curLetter] = curWord;
//     }
//     return true
// };

