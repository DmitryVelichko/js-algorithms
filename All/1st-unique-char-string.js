let s = 'aabbc';

let firstUniqChar = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
        map[s[i]] = true
    } else {
        map[s[i]] = false
    }
  }
