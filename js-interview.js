// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

const arr = [1, 2, 10, 3, 4, 5]

function maxElement() {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

console.log(maxElement(nums))