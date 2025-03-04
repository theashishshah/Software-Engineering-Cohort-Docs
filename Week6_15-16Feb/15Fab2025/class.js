const objOne = {
    fname: "Ashish",
    lname: "Shah",
    age: 21,
    getFullName: function () {
        if (this.lname !== undefined) return `${this.fname} ${this.lname}`
        return this.fname;
    }
}

// Now I want to make objTwo with same properties:

const objTwo = {
    fname: "Abhay",
    lname: "Sharma",
    age: 22,
    getFullName: function () {
        return `${this.fname} ${this.lname}`
    }
}
// console.log(objOne.getFullName())
// console.log(objTwo.getFullName())


class Person{
    constructor(fname, lname, age) {
        this.firstname = fname;  // if I don't pass anything default value will be undefined
        this.lastname = lname;
        this.age = age
        console.log(this.getFullName())

    }
    // constructor(name) {
    //     this.firstname = name
    //     console.log("first constructor called.")
    // }   // we can't have multiple constructor
    getFullName() {
        if (this.lastname !== undefined) return `${this.firstname} ${this.lastname}`
        return this.firstname;
    }
}

const objectOne = new Person("Ashish", "Shah", 21);
const objectTwo = new Person("Abhay", "Sharma", 22);
const objectThree = new Person("Ayush");
console.log(objectOne)
console.log(objectTwo)
console.log(objectThree.getFullName())

class A{
    funInsideA() {
        console.log("Hello from A class.")
    }
}

class B{
    funInsideB() {
        console.log("Hello from B class.")
    }
}

B.prototype = A.prototype
or 


class B extends A{
    funInsideB() {
        console.log("Hello from B class.")
    }
}

console.log(B.prototype)