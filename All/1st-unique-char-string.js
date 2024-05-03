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

  for (let i = 0; i < s.length; i++) {
    if(map[s[i]]) {
        return i
    }
  }

  return -1
};

console.log(firstUniqChar(s));

// binary search

// Binary Search O(log n)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


