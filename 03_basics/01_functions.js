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
  console.log(result);
  
  return result

}

// addTwoNumber(10,5)            //Arguments
// addTwoNumber(10,"5")          //Arguments
// addTwoNumber(10,"a")          //Arguments
// addTwoNumber(10,null)         //Arguments

const result=addTwoNumber(10,5)         //Arguments
console.log("Result:",result);          //undefined  - value is not returned



