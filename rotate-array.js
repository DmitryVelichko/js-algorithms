let rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let value = nums.pop();
    nums.unshift(value);
  }

