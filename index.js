// #JSON

const student = {
  name: "John",
  age: 27,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  sayHi: function () {
    console.log(this.name);
  },
};
// console.log(typeof student);
// console.log(typeof JSON.stringify(student));
// student.sayHi();

const studentJSON = JSON.stringify(student);
console.log(JSON.parse(studentJSON));

// https://jsonplaceholder.typicode.com
