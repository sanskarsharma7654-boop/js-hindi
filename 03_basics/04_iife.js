// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    // named iife
    console.log(`DB connected`);   
})();//semicolon is inportant to stop one execution

( (name)=> {
    //unnamed iife
    console.log("DB connected",`${name}`);   
})("sanskar")

