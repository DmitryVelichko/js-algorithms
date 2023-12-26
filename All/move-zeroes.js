let moveZeroes = function (nums) {
  let prevIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[prevIndex];
      nums[prevIndex] = nums[i];
      nums[i] = temp;
      prevIndex++;
    }
  }
};

console.log(moveZeroes([0, 0, 1]));
