let fname = "Ashish"
let ffname = fname
ffname = "Abhay"

console.log(fname);
console.log(ffname)
// conclusion: string data type do "Deep copy"

let array = ["Ashish", "Shah"]
let array1 = array
array1.push("Abhay")

console.log(array);
console.log(array1)
// conclusion: array does "Shallow copy" and there is not concept of negative indexes


// let obj = {
//     length: 4,
//     width: 5,
//     dimension: {
//         h: 2,
//         w: 5
//     }
// }

let p1 = new Object()
console.log(p1)
p1.foo = "fff"
console.log(p1)


let obj = new Object()
obj.length = 343;
console.log(obj["length"])

let obj1 = obj
obj1.length = 34

console.log(obj)
console.log(obj1)