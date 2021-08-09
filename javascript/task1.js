function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Person.prototype.getAge=function(){
    return this._age;
}
Person.prototype.setAge=function (a){
    this._age=a;
} 
Person.prototype.print=function(){console.log(this.firstName+" "+this.lastName+" is "+this._age+" years old");}


function Student(firstName,lastName,id){
   Person.apply(this,[firstName,lastName]);
    this.id=id;
}
Student.prototype.print=function(){console.log(this.firstName+" "+this.lastName+" id is "+this.id);}
Student.prototype=Object.assign({},Person.prototype,Student.prototype);
const s=new Student("madhu","sudhan",223);
s.setAge(25);
s.print();
console.log("and age is "+s.getAge());



