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

const array = [1,2,3,4,5,6,7,8,9,10]

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

function findMax(arr) {
    return Math.max(...arr)
  
}




console.log(findMax(array))

