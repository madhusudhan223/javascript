// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let elements of array) {
//     if (elements === searchElement) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOccurences([1, 1, 1, 2, 3, 4], 6));
function countOccurences(array, searchElement) {
  return array.reduce((acc, cur) => {
    let occurence = cur === searchElement ? 1 : 0;
    return acc + occurence;
  }, 0);
}
console.log(countOccurences([1, 2, 3, 4, 1], 2));
