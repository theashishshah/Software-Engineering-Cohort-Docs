console.log("HI")
Promise.resolve().then(() => {
    console.log("Promise resolve ho gya")
    Promise.resolve().then(() => {
        console.log("Promise resolve ho gya")
        Promise.resolve().then(() => {
            console.log("Promise resolve ho gya")
            Promise.resolve().then(() => console.log("Promise resolve ho gya"))
        })
    })
})
setTimeout(() => console.log("Hello 1 from time out 1 "), 0)
// setTimeout(() => console.log("Hello 1 from time out 2"), -10000)
console.log("Bye")