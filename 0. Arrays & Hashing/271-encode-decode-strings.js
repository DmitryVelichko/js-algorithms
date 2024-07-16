// String Encode and Decode
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

//O(n), O(n)
class Solution {
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

    decode(s) {
        let res = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            while (s[j] !== '#') {
                j += 1;
            }
            let length = parseInt(s.substring(i, j));
            res.push(s.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return res;
    }
}
