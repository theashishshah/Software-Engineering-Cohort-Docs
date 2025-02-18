Function.prototype.describe = function (namee) {
    console.log(`${this.namee}`)
}

function greet(name) {
    return `Hello ${name}`
}


greet.describe("Ashish")

function creteContent() {
    let count = 0;

    return function () {
        count++;
        return count
    }
}

const createFn = creteContent()
console.log(createFn())

// todo me internally kaise kam kr rha hai