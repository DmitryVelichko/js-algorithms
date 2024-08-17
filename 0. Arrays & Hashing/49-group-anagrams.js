/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
Дан массив строк, вернуть массив сгруппированных анаграмм

Создаем hashmap

Проходим в цикле for по массиву строк
   const arr = new Array(26).fill(0);
   проходимся в цикле for по буквам в строке:
         arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++; [1,0,0,1,0,1...]
         const key = arr.join('#');
         if (!hash[key]) {
           hash[key] = [str];
         } else {
           hash[key].push(str);
         }
return Object.values(hash);    
*/

// O(n*k), O(n*k) т.к. hashmap массивов
var groupAnagrams = function (strs) {

    const hash = {};

    for (let str of strs) {
        // [1,0,0,0,1,0,0,0,0,0,0,1]
        const arr = new Array(26).fill(0);
        // 98 - 97 = ячейка в массиве
        for (let char of str) {
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Convert the count array to a string key
        const key = arr.join('#');

        if (!hash[key]) {
            hash[key] = [str];
        } else {
            hash[key].push(str);
        }
    }

    return Object.values(hash);
};