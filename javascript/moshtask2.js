function countTruthy(array) {
  let count = 0;
  for (let arr of array) {
    if (arr) {
      count++;
    }
  }
  return count;
}
arr = [1, 2, null, 0, undefined, 67, 8];
console.log(countTruthy(arr));
