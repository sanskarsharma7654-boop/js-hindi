// REDUCE

const mynum = [1,2,3]

// const initialvalues = 0
// const total =  mynum.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc + currval
    
// },5)

// const total = mynum.reduce((acc,crr) => (acc + crr),0)
// console.log(total);


const shoopingCart = [
    {
        itemname: "js course",
        price: 299
    },
    {
        itemname: "java course",
        price: 599
    },
    {
        itemname: "data science course",
        price: 5999
    }
]
const total = shoopingCart.reduce((acc,item) => (acc + item.price),0)
console.log(total);

