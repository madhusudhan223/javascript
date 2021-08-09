function sum(...items) {
  //   if (Array.isArray(array)) {
  //     let total = 0;
  //     for (let elem of array) {
  //       total += elem;
  //     }
  //     return total;
  //   }
  //   let total = 0;
  //   for (let value of arguments) {
  //     total += value;
  //   }
  //   return total;

  if (items.length === 1 && Array.isArray(items)) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum([5, 2, 3, 3, 4]));
