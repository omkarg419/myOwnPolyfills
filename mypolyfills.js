Array.prototype.myForEach=function(funcAsArgu){
    for(let i=0;i<this.length;i++)
    {
        funcAsArgu(this[i],i,this)
    }
}