// сумма элементов массива

// const array = [1,2,3,4,5,6,7,8,9,10]

// function sumArr(arr) {
//     return arr.reduce((acc,val) => acc + val, 0)
// }

// function sumArr(arr) {
//     let sum = 0
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArr(array))
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
  for(let i=0; i<strA.length;i++) {
    hash[strA[i].toLowerCase()] = true
  }

  for(let i=0; i<strB.length;i++) {
    if(hash[strB[i].toLowerCase()]) continue
    else return false
  }
  return true
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false

