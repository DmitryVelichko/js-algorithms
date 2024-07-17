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

