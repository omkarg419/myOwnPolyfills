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

// test cases
const arr=[1,2,3,4,5]
arr.myForEach((element,index,array)=>{
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`)
})

const mappedArr=arr.forMap((element)=>{
    return element*2
})
console.log(mappedArr)

const sum=arr.myReduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
console.log(sum)





