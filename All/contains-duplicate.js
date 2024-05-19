let containsDuplicate = function(nums) {
    let map={}
    

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            return true
