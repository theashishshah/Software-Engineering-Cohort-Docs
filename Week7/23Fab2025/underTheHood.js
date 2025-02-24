// console. log('Hello from JS');
// setTimeout(() => console.log('I am delayed 2'), 0);
// console. log( 'Bye Bye');
// setTimeout(() => console.log('I am delayed 1'), 0);  //FIFO

const personOne = {
    name: "Ashish Shah",
    greet: function () {
        console.log(`Hello, ${this.name}`)
    }
}

setTimeout(personOne.greet, 2* 1000);