// function getMax(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array[array.length - 1];
// }
// function getMax(array) {
//   let sortedArray = array.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });
//   return sortedArray[sortedArray.length - 1];
// }
function getMax(array) {
  if (array.length === 0) return undefined;
  //   let max = array[0];
  //   for (let i = 0; i < array.length; i++) if (array[i] > max) max = array[i];
  //   return max;
  //   return array.reduce((acc, cur) => {
  //     if (cur > acc) acc = cur;
  //     return acc;
  //   });
  array.reduce((a, b) => (a > b ? a : b));
}
console.log(getMax([3, 5, 87, 56, 100]));
