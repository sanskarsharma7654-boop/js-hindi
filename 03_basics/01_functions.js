// FUNCTIONS - like a package . jise hm kitni bhi baar use kr sakte hai apne code mai


function sayMyName (){
console.log("I");
console.log("A");
console.log("S");
console.log("IW");
console.log("Io");
console.log("WE");

}

// sayMyName()        // saymyname is reference , ()- execute



// function addTwoNumber (number1,number2){        //parameters       //no data type is needed in js
//     console.log(number1 + number2);
// }


function addTwoNumber (number1,number2){        //parameters       //no data type is needed in js
  let result = number1 + number2
  // console.log(result);
  
  return result

}

// addTwoNumber(10,5)            //Arguments
// addTwoNumber(10,"5")          //Arguments
// addTwoNumber(10,"a")          //Arguments
// addTwoNumber(10,null)         //Arguments

const hero=addTwoNumber(10,5)         //Arguments
// console.log("Result:",hero);        //undefined  - value is not returned


// function loginUserMessage (username){
//   if(username === undefined){
//     console.log("please enter a username");
//     return 
//     }
//   return `${username} just logged in `
// }

// console.log(loginUserMessage());
//  console.log(loginUserMessage("Sanskar"))

function loginUserMessage (username="sam"){
  if(!username){
    // console.log("please enter a username");
    return 
    }
  return `${username} just logged in `
}

// console.log(loginUserMessage("Sanskar"));

// function calculateCartPrice(...num1){
//   return num1

// }
// console.log(calculateCartPrice(200,400,500));


function calculateCartPrice(val1,val2,...num1){
  return num1

}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
  username: "sanskar",
  price: 500000
}

function handleObject(anyobject){
  // console.log(`Username is ${anyobject.username},Price is ${anyobject.price}`);
  // console.log(anyobject.username);
  
}
// handleObject(user)

handleObject({
  username:"Sanskar",
  price: 5000
})


const myNewArray = [200,300,400,10000]

function returnedSecondValue(getarray){
  return getarray[1]

}
// console.log(returnedSecondValue(myNewArray));
console.log(returnedSecondValue(
  [200,300,400,500,600]
));


