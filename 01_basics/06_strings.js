const name = "Alice";
const repocount = 50
// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gamename = new String ("sanskar-sh-ma")

// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(6));
console.log(gamename.indexOf('r'));
console.log(gamename.substring(2));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4);
console.log(anotherString);

const newString1 = "    sanskar   "
console.log(newString1);
console.log(newString1.trim());

const url = "http://sanskar.com/sanskar%20sharma";

console.log(url.replace('%20','-'));
console.log(url.includes(20));


console.log(gamename.split("-",3));
console.log(gamename.bold());












