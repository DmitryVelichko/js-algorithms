//  Palindrome Number

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

let isPalindrome1 = function (s) {
  let reversed = s.toString().split('').reverse().join()

  return(s.toString() === reversed)  
};
