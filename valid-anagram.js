let isAnagram = function (s, t) {
 if(s.length !== t.length) return false
 const sCount = {}
 const tCount = {}

for (let i = 0; i< s.length; i++) {
    if(!sCount[s[i]]) {
        sCount[s[i]] = 0
    }

