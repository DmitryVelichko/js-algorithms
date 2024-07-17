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

