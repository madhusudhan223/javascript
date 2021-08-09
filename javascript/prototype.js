function sum(a,b){return a+b;}
function sum1(a,b){return a+b;}
sum.prototype.print=function print(msg){console.log(msg+"\n");}
sum1.prototype.print=function print(msg){console.log(msg);}
sum.prototype.sub=function sub(a,b){ return a-b;};
//sum1.prototype.println=function (msg){console.log("\n",msg);}
//sum1.prototype=Object.assign({},sum.prototype,sum1.prototype);
sum.prototype=Object.assign({},sum.prototype,sum1.prototype);
//sum.prototype=sum1.prototype;
var s1=new sum();
console.log(s1.constructor(1,3));
s1.print("madhu");
console.log(s1.sub(10,8));
//s1.println("sudhan");
console.log(sum1(1,2));
//o={};
//o._proto_                     