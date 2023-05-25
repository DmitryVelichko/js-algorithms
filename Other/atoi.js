let myAtoi = function(s) {
   
    let trimmedS = s.trim();
   
    let numS = parseInt(trimmedS) 
    if (Number.isNaN(numS)) return 0;

    if( (-2)**31 > numS) {
        return (-2)**31
    } else if (numS > 2**31 - 1) {
        return 2**31 - 1
    }
    else {
        return numS
    }
};

console.log(myAtoi('94949477994'))