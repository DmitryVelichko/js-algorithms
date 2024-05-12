const arr = [-1, 10, 9, 3, 4, 11, 2, 6, 1, 7, 0, 5, 8];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

