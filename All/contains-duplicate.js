let containsDuplicate = function(nums) {
    let map={}
    

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            return true
        } else {
            map[nums[i]] = 1
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,4,1]))

