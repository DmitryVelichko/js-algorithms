const arr = [-3, 2, 4];

function sortedSquares(arr) {
    const n = arr.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let position = n - 1;

    while (left <= right) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }
        position--;
    }

    return result;
}

console.log(sortedSquares(arr)); // [4, 9, 16]
