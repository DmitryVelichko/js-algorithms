

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