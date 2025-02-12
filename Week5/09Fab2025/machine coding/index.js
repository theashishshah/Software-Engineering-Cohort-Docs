// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name: "Ginger tea",
    type: "Green",
    coffeineContent: "Low"
}

//  Problem: Access and print the name and type properties of the tea object.
console.log(teas.name)
console.log(teas.type)


// Problem: Add a new property origin to the tea object.
teas.origin = "China"



//Problem: Change the caffeine level of the tea object to "Medium".
teas.coffeineContent = "Medium"


//Problem: Remove the type property from the tea object
delete teas.type;

//Problem: Check if the tea object has a property origin.
console.log("origin" in teas)

//Problem: Use a for...in loop to print all properties of the tea object.
for (const prop in teas) {
    console.log(teas[prop])
}

//Problem: Create a nested object representing different types of teas and their properties.
teas.teas = {
    greenTea: {
        type: "green",
        props: "Something"
    },
    blackTea: {
        type: "black",
        props: "Something ..."
    },
    masalaTea: {
        type: "Masala",
        props: ["spices", "water", "milk"]

    }
}
console.log(teas.teas)

//Problem: Create a copy of the tea object.
// const copyTea = teas; // but by refrence

const teasString = JSON.stringify(teas)
const copyTea = JSON.parse(teasString)
copyTea.name = "Green lemon tea"
// console.log(teasString)
// console.log(copyTea)
// console.log(teas)


//Problem: Add a custom method describe to the tea object that returns a description string.
teas.teaDescription = function () {
    console.log(`${this.name}, origin of country is ${this.origin}`)
}
teas.teaDescription()


//Problem: Merge two objects representing different teas into one

const teaOne = {
    name: "green tea",
    type: "green",
    origin: "China"
}
const teaTwo = {
    namee: "Masala tea",
    typee: "spice tea",
    originn: "India"
}

Object.assign(teaOne, teaTwo)

console.log(teaOne)