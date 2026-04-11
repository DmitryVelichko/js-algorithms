

// сумма элементов массива

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumArr(arr) {
    return arr.reduce((acc, val) => acc + val, 0)
}

function sumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArr(array))

let s = ['h', 'e', 'l', 'l', 'o',];

let reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

};

reverseString(s);

// time complexity: O(n^2)
// space complexity: O(1)

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// Hash Map
// time complexity: O(n) 
// space complexity: O(n)

function twoSum2(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        let complementPair = target - value;
        if (map[complementPair] !== undefined) {
            return [map[complementPair], i]
        } else {
            map[value] = i
        }
    }
}

// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const arr = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!(nums.includes(i))) {
            arr.push(i);
        }
    }
    return arr;
};

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
  
  let isPalindrome = function (x) {
    let reversedStr = ''
    let xStr = x.toString()
  
    for(let i of xStr) {
  
      reversedStr =  i + reversedStr
  
    }
  return reversedStr === xStr
    
  };
  
  console.log(isPalindrome(121))

  // 1572. Matrix Diagonal Sum
// Easy
// 3.3K
// 46
// Companies
// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.



// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5


// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100
