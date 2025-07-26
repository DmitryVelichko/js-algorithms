 Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
*/
const longestPalindrome = function (str) {
    if (str.length < 1 || str === null) return '';
    let longest = ''

    const expandFromCenter = (str, left, right) => {
        let i = 0;
        while (str[left - i] && str[left - i] === str[right + i]) {
            i++
        }
        i--

        return str.slice(left - i, right + i + 1)
    }

    for (let i = 0; i < str.length; i++) {
        let oddPalindrome = expandFromCenter(str, i, i)
        let evenPalindrome = expandFromCenter(str, i - 1, i)

        if (oddPalindrome.length > longest.length) longest = oddPalindrome
        if (evenPalindrome.length > longest.length) longest = evenPalindrome

    }
    return longest
};