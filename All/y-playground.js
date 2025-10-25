

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

