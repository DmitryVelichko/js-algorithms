// Создатели Вселенной Яндекса используют Энергию Технологий, чтобы воздвигать новые Миры.

// Энергия концентрируется в сгустках, масса каждого из которых выражается целым числом. По физическим законам Вселенной Яндекса можно создать новый Мир только при слиянии двух сгустков, и при условии, что их общая масса будет равна 
// Unexpected text node: '

//                         '
// k.

// Создатели периодически открывают разные скопления сгустков Энергии. Представим одно такое скопление в виде массива целых чисел.

// Создатели намерены творить Миры! Помогите им научиться определять, что в заданном скоплении есть два сгустка Энергии общей массой 
// Unexpected text node: '

//                         '
// k.

// Пример:

// Вход: nums = [10, 15, 3, 7], k = 17

// Выход: [10, 7]

// Примечания
// В качестве решения предоставьте функцию следующего вида, возвращающую true или false:


// module.exports = function isThereAPairOfNumbers(arr, k) {
// …
// };


function isThereAPairOfNumbers(arr, k) {
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = k - arr[i];
        if (seen.has(complement)) {
            return true;
        }
        seen.add(arr[i]);
    }

    return false;
}

console.log(isThereAPairOfNumbers([10, 15, 3, 7], 17)) // [10, 7]

{b: {c: 1}}function getValueByPath(obj, path) {
    const keys = path.split('.');
    let result = obj;

    for (let key of keys) {
        result = result[key];
        if (result === undefined) {
            return undefined;
        }
    }

    return result;
}

// Пример использования
const obj = {a: {b: {c: 1}}};
const path = 'a.b.c';

console.log(getValueByPath(obj, path)); // Вывод: 1
