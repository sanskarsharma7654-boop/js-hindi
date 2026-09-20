// foreach
const programming = ["js","ruby","cpp","java"]

// programming.forEach( function (val){
//     console.log(val);   
// })


// programming.forEach((item)=>{
//     console.log(item);
// })


// function aalu(item){
//     console.log(item);
// }
// programming.forEach(aalu)


// programming.forEach((item,index,arr)=>{
//     console.log(index,item,arr);
    
// })

//**************IMPORTANT***************


const mycoding=[
    {
        langagename:"javascript",
        langugefile:"js"
    },
    {
        langagename:"c++",
        langugefile:"cpp"
    },
    {
        langagename:"python",
        langugefile:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langugefile);
    
})