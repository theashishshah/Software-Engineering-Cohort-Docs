
const user = {
    fname: "Ashish",
    lname: "Shah",
    age: 21,
    address: {
        h: 21, 
        st: 32,
    },
    printDetails: function(...arr){
        arr[0] = "Ashish"
        console.log(arr)
        console.log(arguments)
        console.log(this)
        console.log(`My fname is: ${this.fname} and lname is: ${this.lname}, and I'm ${this.age} YO.`)
    }
}

// user.printDetails() 
// console.log(user.printDetails.bind())
// ------------------bind()----------------
// const tempFn = user.printDetails.bind(user); 
// tempFn()

// -------------------apply()---------------
const userTwo = {
    fname: "Abhay",
    lname: "Sharma",
    age: 22
}
const number = [5, 6, 2, 3, 7]
user.printDetails.apply(userTwo, number)
console.log(number)


// ------------------call()-------------
// NOTE: so the only difference between call() and apply() is how the arguments are passed.
