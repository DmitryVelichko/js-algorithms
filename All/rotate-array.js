let rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let value = nums.pop();
    nums.unshift(value);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 1));
