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
   