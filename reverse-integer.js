let x = 1534236469

let reverse = function (x) {
 
  let temp = x;
  if (x < 0) {
    temp = Math.abs(x);
  }

  let str = temp.toString().split('');
  let arr = str.map(Number);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

