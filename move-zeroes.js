let moveZeroes = function (nums) {
  let prevIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
