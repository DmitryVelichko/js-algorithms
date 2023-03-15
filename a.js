let missingNumber = function (nums) {
    nums.sort(function (a, b) { return a - b });

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i
        }
        else {
            return i + 1
        }

    }

        return -1;
    };


    console.log(missingNumber([0, 1]))