Array.prototype.myForEach=function(funcAsArgu){
    for(let i=0;i<this.length;i++)
    {
        funcAsArgu(this[i],i,this)
    }
}

Array.prototype.forMap=function(callbackfn)
{
    const result=[]

    for(let i=0;i<this.length;i++)
    {
        result.push(callbackfn(this[i],i,this,))
    }

    return result
}

Array.prototype.myReduce=function(callbackfn,initialValue)
{
    let accumulator;
    let startIndex=0;

    if(initialValue !== undefined)
    {
        accumulator=initialValue
    }
    else{
        accumulator=this[0]
        startIndex=1
    }

    for(let i= startIndex; i<this.length; i++)
    {
        accumulator=callbackfn(accumulator,this[i],i,this)
    }
return accumulator
    
}





