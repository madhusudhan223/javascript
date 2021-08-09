function parent(){
    var cntr=0;
    function inc(){
        return ++cntr;
    }
    var dec=function(){return --cntr;}

    return{inc:inc,dec:dec};
}
p=parent();
console.log(p.inc());
console.log(p.inc());
console.log(p.inc());
console.log(p.inc());

console.log(p.dec());