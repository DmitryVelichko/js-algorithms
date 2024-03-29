// // Факториал

// const factorial = (n) => {
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// Числа фибоначчи -  1,1,2,3,5,8,13,21

const fibonachi = (n) => {
    if (n < 2) {
        return n
    }
    return fibonachi(n-1) + fibonachi(n-2)
}

console.log(fibonachi(6))

// web dev simplified
// function countDown(n) {
//     for (let i = n; i > 0; i--) {
//       console.log(i)
//     }
//     console.log('Hooray')
//   }
  
//   function countDownRecursive(n) {
//     if (n <= 0) {
//       console.log('Hooray')
//       return
//     }
  
//     console.log(n)
//     countDownRecursive(n - 1)
//   }
  
//   function sumRange(n) {
//     let total = 0;
//     for (let i = n; i > 0; i--) {
//       total += i
//     }
//     return total
//   }
  
//   function sumRangeRecursive(n, total = 0) {
//     if (n <= 0) {
//       return total
//     }
//     return sumRangeRecursive(n - 1, total + n)
//   }
  
//   function printChildren(t) {
//     // ???
//   }
  
//   function printChildrenRecursive(t) {
//     if (t.children.length === 0) {
//       return
//     }
//     t.children.forEach(child => {
//       console.log(child.name)
//       printChildrenRecursive(child)
//     })
//   }
  
//   const tree = {
//     name: 'John',
//     children: [
//       {
//         name: 'Jim',
//         children: []
//       },
//       {
//         name: 'Zoe',
//         children: [
//           { name: 'Kyle', children: [] },
//           { name: 'Sophia', children: [] }
//         ]
//       }
//     ]
//   }