let myAtoi = function(s) {
   
    let trimmedS = s.trim();
   
    let numS = parseInt(trimmedS) 
    if (Number.isNaN(numS)) return 0;

 