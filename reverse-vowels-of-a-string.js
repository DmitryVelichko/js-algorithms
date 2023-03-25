// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = {} // {a: true, A:true, ...}
    for (const char of 'aeiouAEIOU') {
        vowels[char] = true
    }

    const characters = s.split('');
