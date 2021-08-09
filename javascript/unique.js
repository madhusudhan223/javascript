// let uniqueValues = (array) => [...new Set(array)];
// console.log(uniqueValues([1, 1, 2, 3, 3, 4, 7]));
// let myarray = [1, "a", 1, "a"];
// let unique = myarray.filter((v, i, a) => a.indexOf(v) === i);
//console.log(unique);
//console.log();
const uniqueValues = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => (v, x) => v.id === x.id)) acc.push(v);
    return acc;
  }, []);
const un = uniqueValues(
  [
    { name: "madhu", id: 123 },
    { name: "sudhan", id: 123 },
    { name: "kalle", id: 123 },
  ]
  // (a, b) => a.id === b.id
);
console.log(un);
const arra = [];
