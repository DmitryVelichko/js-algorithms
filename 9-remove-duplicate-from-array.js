/*eslint-disable*/

let nums = [1,1,2,2,2,3,3,4,4]

let removeDuplicates0 = function(nums) {




function removeDuplicates(nums) {
    let i = 0;
    
    while(i < nums.length) {
        if (nums[i] === nums[i+1]) nums.splice(i, 1)
        else i+=1;
    }    
    
    return nums.length
};

function removeDuplicates2(nums) { 
 
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
           
            nums[k] = nums[i];
             k++;
        }
    }
    return k;
    
};
