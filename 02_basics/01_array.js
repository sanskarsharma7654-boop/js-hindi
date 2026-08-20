//array

const MyArry = [0 , 1 , 2 , 3 , 4 , 5]
const myHeros = [ "ironman" , "thor "]

const myArr = new Array(1,2,3,4,5)
// console.log(MyArry[2]);


//Array Methods

// MyArry.push(6)
// MyArry.push(7)
// MyArry.pop ()

// MyArry.unshift(8)
// MyArry.shift()
// console.log(MyArry.includes(9));
// console.log(MyArry.indexOf(1));

// const newArr1 = MyArry.join()
// console.log(MyArry);
// console.log( newArr1);
// console.log(typeof newArr1);

//Slice , splice

console.log("A :", MyArry);


const myn1 = MyArry.slice(1,3)
console.log(myn1);
console.log("B :", MyArry);



const myn2 = MyArry.splice(1,3)
console.log(myn2);
console.log("B :", MyArry);

