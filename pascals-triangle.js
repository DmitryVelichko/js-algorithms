// https://www.youtube.com/watch?v=y24nMGNkkPo&ab_channel=shirinsetayesh

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

/**
2
 * @param {number} numRows
3
 * @return {number[][]}
4
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascalsTriangle = new Array(numRows);
    
    for(let i=0; i<numRows; i++) {
        let row = new Array(i+1)
        row[0] = 1
        row[row.length - 1] = 1
        
  