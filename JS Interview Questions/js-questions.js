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