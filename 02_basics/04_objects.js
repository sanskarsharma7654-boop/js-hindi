//  const tinderUser= new Object()
const tinderUser = {}

tinderUser.id = "13245@"
tinderUser.name= "SAnskar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"sgdysdgsgd@gmail.com",
    fullname: {
        userName:{
            firstName:"Sanskar",
            lastName: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userName.lastName);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2);
const obj3= {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"hashaj@gmail.com"
}  , 
{
        id:1,
        email:"hashaj@gmail.com"
}  , 
{
        id:1,
        email:"hashaj@gmail.com"
}  ,  
{
        id:1,
        email:"hashaj@gmail.com"
}
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



 
