// learn spread operator
const obj1 = {
    h: 23,
    w: 34,
    fname: "Ashish",
    lname: "Shah"
}

const obj2 = {
    height: 334,
    width: 326,
    fname: "Abhay",
    lname: "Sharma"
}

const obj3 = {
    h: 12,
    w: 54
}
const final = { ...obj1, ...obj2, ...obj3, ...obj1 }
// result: if you do multiple time ... op on the same obj, it won't copy multiple times
// if two or more than two objects contains exactly same key: value pair, they will be copied only once.
// if two or more than two objects contains exactly same key but diff values, then spread operator will copy value from the last object placed in resultant object
// console.log(final);

