let x = 1534236469;

let reverse = function (x) {
  const limit = 2147483648;
  const negativeTest = x < 0 ? -1 : 1;
  x = x.toString();

  let result = '';

  for (let i of x) {
    result = i + result;
  }

  result = parseInt(result);
  return result > limit ? 0 : result * negativeTest;
};

console.log(reverse(x));

// let temp = x;
//   if (x < 0) {
//     temp = Math.abs(x);
//   }

//   let str = temp.toString().split('');
//   let arr = str.map(Number);

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   let num = arr.reduce((accum, digit) => accum * 10 + digit, 0);
//   if (x < 0) {
//     num = num * -1;
//   }

//   if (num < (-2) ** 31 || num > 2 ** 31 - 1) {
//     return 0;
//   }

//   return num;
// };
