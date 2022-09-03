function removeDuplicates(nums: number[]): number {
    let i = 0;
    
    while(i < nums.length) {
        if (nums[i] === nums[i+1]) nums.splice(i, 1)
        else i+=1;
    }    
    
    return nums.length
};

function removeDuplicates2(nums: number[]): number { 
 
    let k: number = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
           
            nums[k] = nums[i];
             k++;
        }
    }
    return k;
    
};
    