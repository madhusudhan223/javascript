function gp(){}
function p(){}
function c(){}
gp.prototype.gp_print=function(){console.log('gp');}
p.prototype.p_print=function(){console.log('p');}
c.prototype.c_print=function(){console.log('c');}
p.prototype=Object.assign({},p.prototype,gp.prototype);
c.prototype=Object.assign({},c.prototype,p.prototype);
ccc=new c();
ccc.c_print();
ccc.gp_print();
ccc.p_print=function(){console.log('overide')};
ccc.p_print();
