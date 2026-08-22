const marvel_heros = ["thor","ironman","spidermen"]
const dc_heors =["supermen", "flash", "batman"]

// marvel_heros.push (dc_heors)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heors = marvel_heros.concat(dc_heors)
// console.log(all_heors);

const all_heros = [...marvel_heros,...dc_heors]//spread operator

// console.log(all_heros);

const another_arr= [1,2,3,4,[5,6,7,],7,[6,7,[4,5]]]
const real_anotherarr= another_arr.flat(Infinity)
// console.log(real_anotherarr);

console.log(Array.isArray("Sanskar"));
console.log(Array.from("Sanskar"));
console.log(Array.from({name:"Sanskar"}));  //intersting

let score1 =100
let score2 =1001
const score3 ="sanskar1"

console.log(Array.of(score1,score2,score3));






