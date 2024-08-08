// Merge Sort, Сортировка слиянием O(n * log n)
// 

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
