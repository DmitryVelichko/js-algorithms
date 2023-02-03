let isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '')
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while(leftIndex < rightIndex) {
    if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false
    }
    leftIndex++
    rightIndex--
  }
  return true
}

console.log(isPalindrome('racecar'));

// let isPalindrome = function (s) {
//   s = s
//     .split(' ')
//     .filter((e) => e.trim().length)
//     .join('');
//   s = s.replace(/,/g, '');
//   s = s.toLowerCase();
//   s = s.replace(/:/g, '');

//   s = s.replace('.', "")
//   s = s.replace(/[^a-zA-Z0-9 ]/g, "")
//   console.log(s);
//   let result = '';
//   for (let i of s) {
//     result = i + result;
//   }

//   if (s === result || s === '') {
//     return true;
//   } else {
//     return false;
//   }
// };