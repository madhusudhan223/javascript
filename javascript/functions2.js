const array = true;
try {
  console.log(countOccurences(array, 2));
} catch (e) {
  console.log(e);
}
function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("please enter array boss");

  return array.reduce((acc, cur) => {
    let occurence = cur === searchElement ? 1 : 0;
    return acc + occurence;
  }, 0);
}
