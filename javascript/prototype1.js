var logger={
    warn(a){console.warn(a);},
    info(a){console.info(a);},
    error(a){console.error(a);}
}
function iterm(){}
iterm.prototype.exec=function(){
    this.warn('running');
    try{
        throw new Error('');
       // this.info('successful done');
    }catch(e){
        this.error('failed to exec cmd');
    }
}
logger.error=function(a){console.log("error",a);}
iterm.prototype=Object.assign({},iterm.prototype,logger)
var t=new iterm();
iterm.prototype.error2=function(){console.log('mmm')};
t.error2();
t.exec();