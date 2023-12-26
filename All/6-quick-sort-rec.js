// Quick Sort Recursive, Быстрая сортировка Хоара, O(n * log n)
// Дробим массив до победного

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        if(i === pivotIndex)
            continue
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))