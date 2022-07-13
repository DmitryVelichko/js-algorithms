// Факториал

const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

// Числа фибоначчи -  1,1,2,3,5,8,13,21

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n-1) + fibonachi(n-2)
}

console.log(fibonachi(8))

// web dev simplified
function countDown(n) {
    for (let i = n; i > 0; i--) {
      console.log(i)
    }
    console.log('Hooray')
  }
  
  function countDownRecursive(n) {
    if (n <= 0) {
      console.log('Hooray')
      return
    }
  
    console.log(n)
    countDownRecursive(n - 1)
  