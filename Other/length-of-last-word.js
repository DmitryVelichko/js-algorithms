// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ')
    return (str[str.length-1].length)
};

var lengthOfLastWord2 = function(s) {
    let lastWordCount = 0;
    for(let i=s.length-1; i>=0; i--) {
        if(s[i] !== ' ') {
            for (let j=i; j>=0; j--) {
                if(s[j] !== ' ') {
                    lastWordCount++
                } else {
                    return lastWordCount
                }
            
            }
            return lastWordCount
        }
    }
};