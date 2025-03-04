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


let p1 = {
    fname: "Ashish",
    lname: "Shah",
    age: 21,
    address: {
        road: "92nd cross road",
        street: "5th",
        country: {
            state: "KA",
            countryCode: "IN"
        }
    }
}

// one way to achieve this, but suppose there is 1000 objects then?
// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname,
//     age: p1.age
// }

// let p2 = {
//     ...p1,
//     address: {
//         ...p1.address
//     }
// }

const stringP1 = JSON.stringify(p1)
console.log(stringP1)
let p2 = JSON.parse(stringP1)

p2.address.road = 22
p2.address.country.countryCode = "INN"
// but this will work only with JSON data

// A single spread creates a shallow copy of the original object 
// spread operator doesn't copy inner level, instead it just copy first level
console.log(p1)
console.log(p2)