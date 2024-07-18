/* 1 */

const obj = {
  firstName: "Name",
  age: 20,
  getName() {
    console.log(this.firstName);
  },
};

const getName = obj.getName;
getName(); // res ?

/* 2 */

let x = "outer value";
if (true){
      let x = "inner value";
  console.log(x);
}

/* 3 */
const user = {
  name: "Bob",
  userThis: this,
  func() {
    console.log(this);
  },
  arrowFunc: () => {
    console.log(this);
  }
};

console.log(user.userThis); // undefined
user.func(); // ? obj user
user.arrowFunc(); // ? undefined

/* 4 */

Замыкания
function makeCounter () {
}

let counter = makeCounter()
counter() // 0
counter() // 1
counter() // 2

/* 5 */

// Описать порядок выполнения

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// Описать порядок выполнения

console.log(1);

setTimeout(() => console.log(2), 1);

let promise = new Promise((resolve) => {
  console.log(3);
  resolve();
});

promise.then(() => console.log(4));

setTimeout(() => console.log(5));

console.log(6);

// Описать порядок обработки

Promise.reject('a')
.catch((p) => p + 'b')
.catch((p) => p + 'c')
.then((p) => p + 'd')
.then((p) => p + 'f')
.catch((p) => p + 'h')
.finally((p) => p + 'e')
.then((p) => console.log(p));

/* 6 */

/**
 * реализовать функицию преобразования массива
 * На выходе объект {width: 10, height: 20, color: 'red'}
 */

const arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
  { name: "color", value: 'red' },
];

function toObject(arr){
//??
}

console.log(toObject(arr);

/* 7 */

function isPalindrome(s) {
  // ???
}

isPalindrome('malayalam');
isPalindrome('test');

/* 8 */

// найти в массиве пару индексов элементов, сумма значений которых составляет target
function findTargetIndexes(arr, target){
  //??
}

console.log(findTargetIndexes([6,1,0,2,4,5,9], 9));
console.log(findTargetIndexes([0,1,1], 2));

/* 8b */
// объединить два массива по id
const arr1 = [
    {'id': 1, x: 1},
    {'id': 2, x: 9}
];
const arr2 = [
    {id: 3, x: 5},
    {id: 1, x: 10},
]
result:
[
    {id: 1, x: 10},
    {id: 2, x: 9},
    {id: 3, x: 5}
]

function joinArraysById(arr1, arr2){

}

console.log(joinArraysById(arr1, arr2));

/* 9 */

function uniq(arr) {
  // ???
}

const res = uniq([
  { id: 1, name: "item #1" },
  { id: 3, name: "item #2" },
  { id: 1, name: "item #3" },
  { id: 4, name: "item #4" },
  { id: 2, name: "item #5" },
  { id: 3, name: "item #5" }
]);

console.log(res);

/* 9 */
/* Задачи для работы с массивами */

const arr = [
  { number: 5, total: 40, flag: false, str: "test", lang: "react" },
  { number: 10, total: 50, flag: true, str: "hello", lang: "vue" },
  { number: 15, total: 60, flag: false, str: "gg", lang: "angular" },
  { number: 20, total: 70, flag: true, str: "gl", lang: "redux" }
];

// 1 задача: У каждого объекта сделать инверсию для свойств типа boolean

const task1 =
console.log(task1);

// 2 задача: Оставить только объекты, у которых total > 50 и flag равен true

const task2 =
console.log(task2);

// 3 задача: Оставить у объектов свойства строкового типа

const task3 =
console.log(task3);

// реализовать myReduce
// [1,2,3].myReduce(...)