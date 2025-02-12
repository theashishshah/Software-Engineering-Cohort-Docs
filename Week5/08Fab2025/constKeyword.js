// The key idea behind the const keyword in JavaScript is that it makes the variable itself immutable,

// Why "const" keyword let object's properties modifiable but not primitives, while its whole idea is to make variable immutable

// Ans: in the case of objects, const keyword doesn't let objects to re-define, instead it let them to modify themselves

const one = {
    name: "Ashish"
}
one.name = "ayush"
console.log(one)

// the above code is fine, but we can't do like this:

// one = {
//     fname: "Ashish",
//     lname: "Shah"
// }

console.log(one)
// let two = one
// two.name = "Abhay"
// console.log(one)
// console.log(two)


// const name = "Ashish Shah"
// name = "Abhay Sharma"


// one.name = "ayush", you're modifying the content (property) of the object, not the object reference itself.


const two = Object.freeze({
    fname: "Ashish",
    lname: "Shah",
    age: 21
})

two.age = 33;
console.log(two)

    ```js
const prevents reassignment of the variable itself, but does not make the contents of objects (arrays or objects) immutable.
To prevent mutation of an object, you would need to explicitly freeze the object using Object.freeze().
```