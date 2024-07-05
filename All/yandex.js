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

// function digitPermutation(arr) {
//     const hash = {}

//     for(let num of arr) {
//         let str = num.toString().replace(/0/g,'').split('').sort().join('')
//         if(!hash[str]) hash[str] = [num]
//         else hash[str].push(num)
//     }

//     return Object.values(hash)
// }





function digitPermutation(arr) {
    const hash = {}
    const res = []


    for (let i = 0; i < arr.length; i++) {
        // 300021 => 321
        let num = arr[i].toString().replace(/0/g, '').split('')
        // 321 => {'1': 1, '2': 1, '3': 1}
        let hashKeys = {};
        for (let n of num) {
            hashKeys[n] = (hashKeys[n] || 0) + 1
        }

        // {'1': 1, '2': 1, '3': 1} => 123
        let str = '';
        for (let key of Object.keys(hashKeys)) {
            str += key + hashKeys[key] + '|'
        }

        if (!hash[str]) hash[str] = [arr[i]]
        else hash[str].push(arr[i])




        for (let key in hash) {
            res.push(hash[key])
        }
        return res
    }
}

console.clear();
console.log('start test')
///                           vvvv      vvvvv  vvv       vvvvvv
console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]));
// [[99, 90000009], [111, 101010], [1230, 23001, 123, 300021], [9]]
//                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^
console.log(digitPermutation([11, 22])); // [[11], [22]]

console.log('end test');