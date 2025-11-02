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