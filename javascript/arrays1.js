function includes(arrays, searchElement) {
  for (let number of arrays) {
    if (number === searchElement) {
      return true;
    }
  }
  return false;
}
console.log(includes([2, 4, 5, 6], 10));
