const arr = [
  { name: "akhil", age: 40 },
  { name: "madhu", age: 26 },
  { name: "kalle", age: 30 },
];
const sortedArray = arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedArray);
