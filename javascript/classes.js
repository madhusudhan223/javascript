class Person{
    constructor(n){
        this.name=n;
    }
    set age(a){
        this._age=a;
    }
    get age(){
        return this._age;
    }
    print(){
        console.log(this.name+' is '+this._age+' years old');
    }
}
class Student extends Person{
    constructor (name,age,id){
        super(name);
        this._age=age;
        this._id=id;
    }
    printc(){console.log("hai")}
}

const will=new Student("madhu",25,223);
will.print();