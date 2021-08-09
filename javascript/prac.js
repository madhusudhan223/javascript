// function display(n) {
//   if (n > 0) {
//     display(n - 1);
//     console.log(n);
//   }
// }
// display(10);
// function printN(n,n1){
// if(n<=n1){
// console.log(n);
// printN(n+1,n1);
// }
// }
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(user.sayHi, 1000);
// function rename(str) {
//   let modify = str.toLowerCase();
//   let arr = modify.split(" ");
//   let empty = [];
//   for (let i = 0; i < arr.length; i++) {
//     empty[i] = arr[i].replace(/[a-z]/, function (char) {
//       return char.toUpperCase();
//     });
//   }
//   return empty.join(" ");
// }
// console.log(rename("madhu Sudhan Kalle"));
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
// const circle = new Circle(1);
// console.log(circle);
// let number = { a: 10 };
// function increase(number) {
//   number.a++;
// }
// increase(number);
// console.log(number);
let sorted = [];
function sortStringArray(array) {
  return array.sort((a, b) => b.localeCompare(a));
}
console.log(sortStringArray(["nan", "mad", "anan"]));
