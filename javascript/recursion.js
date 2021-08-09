// function m(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
// m(1)(2)();
// function dynamicAdder(a, res = 0) {
//   if (!a) {
//     return res;
//   }
//   res += a;
//   return (c) => dynamicAdder(c, res);
// }
// console.log(dynamicAdder(1)(2)(3)(8)());
// const arr = [1, -1, 2, -3];
// const a = arr.filter((item) => item < 0);
// console.log(a);
// const arr = [1, 2, 7, 3];
// const max = arr.reduce((a, v) => {
//   if (v > a) {
//     a = v;
//   }
//   return a;
// });

// const obj = {
//   name: { name: "madhu" },
//   age: 24,
//};
// console.log(obj);
// const obj1 = { ...obj };
// obj.name.name = "hari";
// console.log(obj1);
// console.log(obj);
// console.log(max);
// function m(arr, e1) {
// let arr = [1, 2, 3, 4, 4, 4, 1, 1, 5, 7];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr[j] = "x";
//     }
//   }
//   if (arr[i] !== "x") arr2.push(arr[i]);
// }
// console.log(arr2);
let ar = [1, 2, 3, 4, 5];
function m(k, l, a) {
  console.log(k, l, a);
}
function n() {
  // ar.map((r) => m(r));
  ar.map(m);
}
n();
