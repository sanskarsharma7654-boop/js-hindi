// For of

// Array specipic loop

// ["","","",""]
//[{},{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

const greeting = "Hello 5 World!"
for (const greet of greeting) {
    if (greet == 5) {
        // console.log("detected 5");
        break
    }
    // console.log(`Each char :${greet}`);
    
}

// Maps 

const map = new Map()

map.set('IN',"india")            //Insertr keay and values
map.set('IN',"india")            //no repeatation
map.set('US',"united states")
map.set('PAK',"pakistan")
console.log(map);

for (const [key,value] of map) {
    console.log(key , ":",value);
    
}

//on object
const myobj = {
    game1:"spiderman",
    game2: "batman"
}
// for (const [key,value] of myobj) {   // Not iterable
//     console.log(key, ":", values);
    
// }
