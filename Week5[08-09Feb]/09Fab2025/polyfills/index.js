const array = [1, 3, 4, 5]

array.length

let naam = "Ashish Shah"

naam.length

const one = {
    x: 1,
    length: 4,
    prototype: {
        fill: function () {
            return "fill function"
        },
        map: function () {
            return "Map function"
        }
    }
}
// console.log(one.prototype.map())

Object.prototype.chai = function () {
    console.log("Welcome to my profile.")
}
let fname = "Ashish"
fname.chai()

const two = {
    h: 1,
    s: 34
}

two.chai()

if (!Array.prototype.map) {
    // here our polyfills
    Array.prototype.map = function () {
        // log and code
        return 'Map function'
    }
}

console.log(array.map())