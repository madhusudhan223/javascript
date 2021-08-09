const obj = {
  name: "madhu",
};
function getName(a, b, c) {
  console.log(`${this.name} is developer`, a + b, c);
}
//getName.call(obj, 1, 2);
// function customCall(fn, someObj, ...args) {
//   someObj.fn = fn;
//   someObj.fn(...args);
// }
// customCall(getName,obj,1,2);
Function.prototype.customCall = function (someObj, ...args) {
  // const func = this;
  someObj.fn = this;
  someObj.fn(...args);
};
//getName.customCall(obj, 1, 2);
Function.prototype.customBind = function (someObj, ...args) {
  const func = this;
  return function (...moreArgs) {
    someObj.fn = func;

    someObj.fn(...args, ...moreArgs);
  };
};
Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...fargs) {
    obj.apply(args[0], [...params, ...fargs]);
  };
};
// const b = getName.customBind(obj, 1);
// b(5, 6);
const c = getName.myBind(obj, 1);
c(2, 3);
