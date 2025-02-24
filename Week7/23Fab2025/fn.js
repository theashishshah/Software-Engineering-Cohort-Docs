let globalVariable = "Hello, I'm global"

function changeGlobal() {
    let globalVariable = "Ashish"
    // console.log(globalVariable)
    return function test() {
        // globalVariable = "Modified ashish"
        // console.log(globalVariable)
    }
}
// console.log(globalVariable)
// const fn = changeGlobal()
// fn()


const personOne = {
    name: "ashish shah",
    greet: function () {
        console.log(`Hello, ${this.name}`)
    }
}

const personTwo = {
    name: "Abhay Sharma"
}
personOne.greet.call(personTwo)
