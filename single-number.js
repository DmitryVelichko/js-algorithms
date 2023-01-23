nums = [777, 3, 3, 3, 1, 2, 9, 9, 1, 2, 10, 10];

let singleNumber = function (nums) {
  let ht = {};

  for (num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (i in ht) {
    if (ht[i] === 1) {
      return i;
    }
  }
};

console.log(singleNumber(nums));
