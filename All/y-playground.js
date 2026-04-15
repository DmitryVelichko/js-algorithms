

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

/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
    let sum = 0
    let j = mat[0].length - 1

    for (let i = 0; i < mat.length; i++, j--) {
        if (i !== j) {
            sum += mat[i][j]
        }
        sum += mat[i][i]
    }

    return sum
}

console.log(diagonalSum([
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]])) // 8

// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

let mySqrt = function(x) {
    if (x <= 1) return x
    for(let i = 2; i <= x; i++) {
        if(i * i === x) {
            return i
        } else if (i * i > x)  {
            return i - 1
        }
    }
}

// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 3 ways: DFS(recursive/iterative) & BFS
// O(n), O(h): which is O(n) in worst case of an unbalanced tree

// DFS recursive
const maxDepth = (root) => {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// DFS iterative pre-order: O(n), O(h)
//Best when tree is deep, avoids recursion limit

function maxDepth2(root) {
    let stack = [[root, 1]]; // Stack to store nodes and their corresponding depth
    let maxDepth = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();
        maxDepth = Math.max(maxDepth, depth); // Update the maximum depth
        
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);

    }
    return maxDepth;
}

// BFS iterative, O(n), O(n)
//Where w = max width of the tree (max nodes in any level).
// Worst-case scenarios:

// Balanced tree: width ≈ n/2 → O(n)

// Skewed tree: width = 1 → O(1)

// So:

// Balanced tree: O(n) (because one full level can be half the nodes)

// Worst case (skewed tree but narrow): O(1)

//Can use more memory in wide trees

