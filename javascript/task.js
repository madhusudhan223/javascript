function Person(name){
    this.name=name;
}
Person.prototype.getAge=function getAge(){
    return this.age;
}
Person.prototype.setAge=function setAge(a){
    this.age=a;
} 
Person.prototype.print=function(){
    console.log(this.name +" is "+this.age+" years old");
}
//const p=new Person("madhu");
//p.setAge(25);
//p.print();

