// Binary Search Recursive O(log n)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let start = 0;
let end = arr.length -1;

const binarySearchRec = (arr, value, start, end) => {

  if (start > end) return -1;

  let middle = Math.floor((start + end) / 2);

