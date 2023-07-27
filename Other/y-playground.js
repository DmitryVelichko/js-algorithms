/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // Задача на Arrays and Hashing
 // 
 // T: O(n), S:O(1) result array не считается по условиям задачи
 var productExceptSelf = function(nums) {
    const res = [];
    let start = 1;
    let start2 = 1
    // Перемножаем между собой числа слева направо кроме последнего и пушим в массив
    for (let i = 0; i < nums.length; i++) {
        res.push(start)
        start = start * nums[i]
    }
        // Перемножваем между собой числа справо налево кроме первого и 
        // перемножваем с числами в массиве

    for (let i = nums.length - 1; i >= 0; i--) 