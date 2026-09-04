// var c = 300
let a = 300

if(true){
    let a = 30
    const b = 40
    var c = 34
    // console.log("inner:",a);   
}
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "hitesh"

    function two(){
        const website="youtube"
        console.log(username);  
        
    }
    // console.log(website);      //error
    two()    
}
// one()

if (true){
    const username = "sanskar"
    if (username === 'sanskar'){
        const nickname = " cheetahh"
        // console.log(username  + nickname);
        
    }
    // console.log(nickname);      //error
    
}
// console.log(username);         //error

//********************** intersting*******************/

console.log(addone(5))
function addone(num){
    return num + 1
}



// console.log(addtwo(5));                 error bcz of the syntax of function
const addtwo = function(num){
    return num + 2
}



