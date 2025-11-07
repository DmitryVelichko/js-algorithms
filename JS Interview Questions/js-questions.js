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
// ----------------------------------------------------------------------------------------------------------------------


// найти максимальный и минимальный элемент в массиве

// const array = [1,2,3,4,5,6,7,8,9,10]

// function findMin(arr) {
//     arr.sort((a,b) => b-a)
//     return (arr[0])
// }

// function findMax(arr) {
//     let max = -Infinity
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > max) max = arr[i]
//     }
//     return max
// }

// function findMin(arr) {
//     let min = arr[0]
//     for(let i=0; i<arr.length; i++) {
//         min = Math.min(arr[i], min)
//     }
//     return min
// }

// function findMin(arr) {
//     return arr.reduce((acc, next) => Math.min(acc, next))

// }

// function findMax(arr) {
//     return Math.max(...arr)

// }

// console.log(findMax(array))

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// // Данные на вход
// const people = [
//     {
//       name: 'Alex',
//       city: 'Moscow',
//     },
//     {
//       name: 'Ivan',
//       city: 'Moscow',
//     },
//     {
//       name: 'Joe',
//       city: 'New York'
//     },
//     {
//       name: 'Johan',
//       city: 'Berlin'
//     },
//   ]

//   const groupByCity = (array) => {
//     let res = {}

//     for(let obj of array) {
//         let {name, city} = obj

//         if(!res[city]) res[city] = name
//         else if(Array.isArray(res[city])) res[city].push(name)
//         else res[city] = [res[city], name]
//     }
//     return res
//   }

//   // Данные на выход
//   /*
//   {
//     'Moscow': [ 'Alex', 'Ivan' ],
//     'New York': 'Joe',
//     'Berlin': 'Johan'
//   }
//   */

// console.log(groupByCity(people))  


const anagram = (strA, strB) => {
  let hash = {}
  for (let i = 0; i < strA.length; i++) {
    hash[strA[i].toLowerCase()] = true
  }

  for (let i = 0; i < strB.length; i++) {
    if (hash[strB[i].toLowerCase()]) continue
    else return false
  }
  return true
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false

// 4. How Remove the first element from an array in JavaScript ?

// Initialize an array
let arr = [5, 6, 7];
arr = arr.slice(1);
// Create a new array without the first element
console.log(arr);

// 1. Write a Program to reverse a string in JavaScript.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks"));

// Write a Program to check whether a string is a palindrome string.

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("GFG"));

// 3. Find the largest number in an array in JavaScript.

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));

// 5. Write a Program to use a callback function?

function greet(name, callback) {
  callback(`Hello, ${name}!`);
}
greet('Geek', message => console.log(message));

const obj = { name: 'Riya' };
obj.age = 21;
console.log(obj);

const obj = { name: 'Riya', age: 21 };
delete obj.age;
console.log(obj);

// sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([15, 6, 10, 2]));

// 16. Write a Program to check if a number is prime or not ?
// A prime number is a whole number greater than 1 that has only two factors: 1 and itself. 
function isPrime(num) {
  if (num <= 1)
    return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

console.log(isPrime(7));

// merge two arrays 
function mergeArrays(arr1, arr2) {
  // this method merges all the elements 
  // of arr2 at the end of arr1.
  return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));

// sort an array in Ascending Order 
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // swap the elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 3, 8, 1]));


// sort an array in Descending Order 
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) { // 👈 changed '>' to '<'
        // swap the elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


console.log(sortArrayDesc([5, 3, 8, 1]));

// Find the Intersection of Two Arrays

function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7, 8]));

// Calculate the Power of a Number 

function power(base, exponent) {
  return base ** exponent;
}

console.log(power(3, 4));

//  frequency of elements in an array
//O(n), O(n)
function frequency(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));

// count the occurrences of a character in a string
//O(n), O(1)
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar('GeeksForGeeks', 'G'));

//O(n), O(1)
function countChar(str, char) {
  let count = 0;
  for (const c of str) if (c === char) count++;
  return count;
}

// Longest Word in a String
function longestWord(str) {
  //str is split into an array of words using the split method.
  const words = str.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord('GeeksForGeeks is great'));

// Array of Strings to Uppercase

function toUpperCaseArray(arr) {
  const upperCaseArray = [];
  for (let i = 0; i < arr.length; i++) {
    upperCaseArray[i] = arr[i].toUpperCase();
  }
  return upperCaseArray;
}

console.log(toUpperCaseArray(['g', 'f', 'g']));

// Count Vowels in a String
function countVowels(str) {
  let count = 0;
  // Include both lowercase and uppercase vowels
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello geek"));

// Get Unique Characters from a String

function uniqueCharacters(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join('');
}

console.log(uniqueCharacters("geeksforgeeks"));

// Remove Duplicates from an Array

function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));

// 2623. Memoize
// Solved
// Medium
// Companies
// Hint
// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1


// Constraints:

// 0 <= a, b <= 105
// 1 <= n <= 10
// 0 <= actions.length <= 105
// actions.length === values.length
// actions[i] is one of "call" and "getCallCount"
// fnName is one of "sum", "factorial" and "fib"

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)

    if (key in cache) return cache[key]
    const result = fn(...args)
    cache[key] = result
    return result
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

//  reverse an array

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([5, 6, 7, 8]));

// Get the last element of an array 

function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log(lastElement([6, 2, 9, 5]));

// Find the Union of Two Arrays 

function arrayUnion(arr1, arr2) {
  // merges two arrays then removes duplicates
  // and returns the output as a new array.
  return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));