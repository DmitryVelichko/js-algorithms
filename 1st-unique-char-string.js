let s = 'aabbcc';

let firstUniqChar = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
        map[s[i]] = true
    } else {
        map[s[i]] = false
    }
  }

  for (let i = 0; i < s.length; i++) {
    if(map[s[i]]) {
        return i
    }
  }

  return -1
};

console.log(firstUniqChar(s));
