//  Palindrome Number

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

let isPalindrome1 = function (s) {
    let reversed = s.toString().split('').reverse().join()
  
    return(s.toString() === reversed)  
  };
  
  var isPalindrome2 = function(x) {
    if(x < 0) return false;
    x = x.toString()
    var i = 0;
    var j = x.length - 1;
    while(i < j){
        if(x[i] !== x[j]) return false;
        i++;
        j--;
    }
    return true;
  };
  
