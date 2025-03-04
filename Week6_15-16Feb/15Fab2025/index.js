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
}

objTwo.__proto__ = objOne;

console.log(objOne.getFullName())
console.log(objTwo.getFullName())  // 
