// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

// const arr = [1, 2, 10, 3, 4, 5]

function maxElement() {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }
    return max
}

// console.log(maxElement(nums))

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i]

        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    }

    return { min, max };
}


const numbers = [5, 1, 3, 412, 12, 512];
const result = findMinMax(numbers);

// console.log(`Минимальное значение: ${result.min}`);
// console.log(`Максимальное значение: ${result.max}`);

// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Vasya',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const hash = {}
    for (const obj of people) {
        if (hash[obj.city] === undefined) hash[obj.city] = obj.name
        else if (typeof hash[obj.city] === "string") hash[obj.city] = [hash[obj.city], obj.name]
        else hash[obj.city].push(obj.name)
    }
    return hash
}

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const groupByCity1 = (array) => {
    const result = {}

    for (const item of array) {
        const { city, name } = item

        if (!result[city]) {
            result[city] = name
        } else if (Array.isArray(result[city])) {
            result[city].push(name)
        } else {
            result[city] = [result[city], name]
        }
    }

    return result
}

const groupByCity2 = (array) =>
    array.reduce((acc, { city, name }) => {
        if (!acc[city]) {
            // первый человек в городе → строка
            acc[city] = name
        } else if (typeof acc[city] === "string") {
            // второй человек → превращаем в массив
            acc[city] = [acc[city], name]
        } else {
            // третий и далее → пушим в массив
            acc[city].push(name)
        }
        return acc
    }, {});



console.log(groupByCity2(people))
