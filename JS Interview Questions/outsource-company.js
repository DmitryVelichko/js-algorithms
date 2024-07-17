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

//Описать порядок выполнения

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));
