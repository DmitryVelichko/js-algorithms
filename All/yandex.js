/*
Дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа,
которые можно получить путём перестановки цифр их составляющих,
нули при этом игнорируем, т. к. нет числа 011.
Решение должно быть максимально эффективно по памяти и времени.
*/

/*
[1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]
hash = {
  '123': [300021, 1230...]
}
*/
// O(n * d logd)
// function digitPermutation(arr) {
//     const hash = {}

//     for(let num of arr) {
//         let str = num.toString().replace(/0/g,'').split('').sort().join('')
//         if(!hash[str]) hash[str] = [num]
//         else hash[str].push(num)
//     }

//     return Object.values(hash)
// }


// O(n*d)
function digitPermutation(arr) {
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        // Преобразуем число в строку, удаляем нули и разбиваем на символы
        let num = arr[i].toString().replace(/0/g, '');
        
        // Подсчитываем количество каждой цифры
        let count = {};
        for (let n of num) {
            count[n] = (count[n] || 0) + 1;
        }
       
        // Формируем ключ из подсчитанных цифр
        let key = '';
        for (let digit in count) {
            key += digit + count[digit];
        }

        // Добавляем число в соответствующий массив в hash
        if (!hash[key]) {
            hash[key] = [arr[i]];
        } else {
            hash[key].push(arr[i]);
        }
    }

    // Создаем результат на основе значений из hash
   

    return Object.values(hash);
}


console.clear();
console.log('start test')
///                          
console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]));
// [[99, 90000009], [111, 101010], [1230, 23001, 123, 300021], [9]]
//                                
console.log(digitPermutation([11, 22])); // [[11], [22]]

console.log('end test');