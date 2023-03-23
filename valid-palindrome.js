//  Palindrome Number

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

let isPalindrome1 = function (s) {
  let reversed = s.toString().split('').reverse().join()

  return(s.toString() === reversed)  
};

let isPalindrome = function (x) {
  let reversedStr = ''
  let xStr = x.toString()

  for(let i of xStr) {

    reversedStr =  i + reversedStr
