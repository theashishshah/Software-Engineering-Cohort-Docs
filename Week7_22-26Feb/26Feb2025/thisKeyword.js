'use strict'

//INFO: 'this' keyword doesn't work with arrow function because it always points to global(window object) variables


const fname = "Ashish"
const lname = "Shah"

console.log(this)
const oneTwo = () =>{
    console.log(this)
}
oneTwo()

const user = {
    fname: "Ashish",
    lname: "Shah",
    age: 21,
    printDetails: function(){
        console.log(`My fname is: ${this.fname} and lname is: ${this.lname}, and I'm ${this.age} YO.`)
    }
}

function printDetails(){
    console.log(`My fname is: ${this.fname} and lname is: ${this.lname}, and I'm ${this.age} YO.`)
}

// printDetails()

/** NOTES:
 *  in objects, this keyword refers to that object itself
 *  in node env, this keyword referes to {}
 *  in browser, this referes to window object
 *  in browser -------------
 *  const arr = () =>{
        console.log(this)
    }
    arr()

    function  test(params) {
        console.log(this)
    }
    test()

    in both the above cases it refers to window object,
 */