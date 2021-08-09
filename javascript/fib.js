// function fib(nth) {
//   if (nth === 0 || nth === 1) return 1;
//   return fib(nth - 1) + fib(nth - 2);
// }
// console.log(fib(6));
function fib(nth) {
  if (nth === 0 || nth === 1) return 1;
  let x = 0;
  let y = 1;
  for (let i = 1; i < nth; i++) {
    fibsum = x + y;
    x = y;
    y = fibsum;
  }
  return fibsum;
}
console.log(fib(8));
//0,1,1,2,3,5,8,13
