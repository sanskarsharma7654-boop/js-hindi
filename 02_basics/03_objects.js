//  Singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser ={
    name: "Sanskar",
    [mySym]: "mykey1",
    "Full_name":"Sanskar Sharma",
    age:18,
    location:"Jaipur",
    email : "H.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday",'Saturday']
}

//  console.log(JsUser.email);
//  console.log(typeof JsUser.mySym);
 
//  console.log(JsUser['email']);
//  console.log(JsUser["Full_name"]);
//  console.log(JsUser[mySym]);

 JsUser.email = 'J.com'
 
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="E.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
console.log("Hello JS user");

}
JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`);

}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);





 


 