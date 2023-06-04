/*eslint-disable*/

let nums = [1,1,2,2,2,3,3,4,4]

let removeDuplicates0 = function(nums) {
    let k = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
           nums[k] = nums[i + 1]
            k++;
        }
    }
    return k;
};

console.log(removeDuplicates0(nums))


