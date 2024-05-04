// Bubble Sort, O(n^2)

const arr = [9,8,7,6,5,4,3,2,1,1,0,-1,8,9,-2,-3];


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if(arr[j+1] === undefined) console.log('1 !!!')
