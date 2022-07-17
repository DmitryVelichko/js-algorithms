// Bubble Sort, O(n^2)

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // O(n*n)

