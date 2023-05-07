// let a=10;
// let b=20;

// console.log(a+b)

const add = (a,b)=>{
    console.log(a+b)
}


// add(5,2)

const sub = (m,n)=>{
    console.log(m-n)
}

const multi = (m,n)=>{
    console.log(m*n)
}

const divide = (m,n)=>{
    console.log(m/n)
}

const sqrt = (m,n)=>{
    console.log(m**n)
}

const half = (m)=>{
    console.log(m/2)
}
// module.exports= [add,sub,multi,divide,sqrt,half]

module.exports= {add,sub,multi,divide,sqrt,half}