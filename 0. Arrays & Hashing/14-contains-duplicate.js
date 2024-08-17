// Contains Duplicate

// Solution
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /**
 * Вернуть true если в массиве есть дубликат числа
 *
 * hashmap
 *   В цикле проходимся по массиву
 *       Число есть в hash? Возвращаем true
 *      Добавляем число в хэш
 *   return false
 *
  */
 var containsDuplicate = function(nums) {
    // O(n), O(n)
   
   const hash = {}
   for(let num of nums) {
        if(hash[num] !== undefined) return true
        hash[num] = num
   }
   return false
};