// Reverse bits of a given 32 bits unsigned integer.

//https://www.youtube.com/watch?v=dbqqDHtv_Ms&ab_channel=AlgoJS
// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    
    for(let i=0; i< 32; i++) {
        
        let lastBit = n & 1;
       
        let revBit = lastBit << (31-i)
        
        result = result | revBit
        
        n = n >>> 1
    }
    
    return result >>> 0
};

reverseBits(00001100110011110011110000110011)