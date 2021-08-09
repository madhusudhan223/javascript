function except(arrays, except) {
  const arr = [];
  for (let elements of arrays) {
    if (!except.includes(elements)) {
      arr.push(elements);
    }
  }
  return arr;
}
console.log(except([1, 2, 4, 5, 2], [2, 4]));
