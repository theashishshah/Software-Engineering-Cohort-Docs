const one = {
    fname: "Ashish",
    lname: "Shah",
    age: 21,
}

for (const key in one) {
    console.log(key)
}

console.log(Object.keys(one))
console.log(Object.values(one))
console.log(Object.entries(one))