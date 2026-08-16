// Primitive

// 7 types : String , number, boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNumber = 12572575735713757531n


// Reference (non primitive)

// Array, Object ,Functions

const Heros = ['saktimaan' , 'naagraj' , 'sanskar']

let myObj={
    name: 'sanskar',
    age: 22,
}

const myFunction = function() {
    // console.log("Hello world")
    
}

// console.log(typeof myObj);


//************************************* */


// Stack (Primitive ), Heap (Non - Primitive)

let myYoutubename= "Psycospidy"

let anothername = myYoutubename
anothername = 'sanskar'

console.log(anothername);
console.log(myYoutubename);

let user1 ={
    email: "sanskar@gmail",
    upi : "user@sbi"
}
let user2 = user1

user2.email ="manu@gmail"
console.log(user1.email);
console.log(user2.email);

