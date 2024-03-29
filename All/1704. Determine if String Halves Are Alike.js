// 1704. Determine if String Halves Are Alike
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

 

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
 

// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    const a = s.substring(0, s.length/2)
    const b = s.substring(s.length/2)
    let countA = 0
    let countB = 0

    let hash = {'a':true,'e':true, 'i':true, 'o':true, 'u':true, 'A':true, 'E':true, 'I':true, 'O':true, 'U':true}

    
    for(let i=0; i<a.length; i++) {
        if(a[i] in hash) countA++
    }

     for(let i=0; i<b.length; i++) {
        if(b[i] in hash) countB++
    }

    return countA === countB
};