// time complexity: O(n^2)
// space complexity: O(1)

function twoSum(nums, target) {

  for (let i = 0; i<nums.length; i++) {
       for (let j = i + 1; j<nums.length; j++) {
           if(nums[i] + nums[j] === target) {
               return [i, j]
           }
       }
  }
};

// Hash Map
// time complexity: O(n)
// space complexity: O(n)?

function twoSum2(nums, target) {
  let map = {}
  for(let i = 0; i < nums.length; i++) {
    let value = nums[i]
    let complementPair = target - value;
    if(map[complementPair] !== undefined) {
      return [map[complementPair], i]
    } else {
      map[value] = i
    }
  }
}
