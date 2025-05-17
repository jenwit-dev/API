// #JSON

// const student = {
//   name: "John",
//   age: 27,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   wife: null,
//   sayHi: function () {
//     console.log(this.name);
//   },
// };
// console.log(typeof student);
// console.log(typeof JSON.stringify(student));
// student.sayHi();

// const studentJSON = JSON.stringify(student);
// console.log(JSON.parse(studentJSON));

// HTTP Request using fetch instead of Postman

// const BASE_URL = "https://jsonplaceholder.typicode.com";
// 1. Get All
// let endpoint = BASE_URL + "/posts";
// let option = {
//   method: "GET",
// };

// 2. Get by ID
// let endpoint = BASE_URL + "/posts/20";
// let option = {
//   method: "GET",
// };

// 3. Get comment
// let endpoint = BASE_URL + "/posts/1/comments";
// let option = {
//   method: "GET",
// };

// 4. Get comment by Query
// let endpoint = BASE_URL + "/comments?postId=1";
// let option = {
//   method: "GET",
// };

// 5. Post
// let endpoint = BASE_URL + "/posts";
// let option = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Test",
//     body: "lorem...",
//   }),
// };

// 6. Put
// let endpoint = BASE_URL + "/posts/99";
// let option = {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     phone: "123",
//   }),
// };
// 7. Patch
// let endpoint = BASE_URL + "/posts/77";
// let option = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     email: "john@mail.com",
//   }),
// };

// 8. Delete
// let endpoint = BASE_URL + "/posts/88";
// let option = {
//   method: "DELETE",
// };

// fetch(endpoint, option)
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function sendRequest() {
  try {
    const result = await fetch(endpoint, option);
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

sendRequest();
