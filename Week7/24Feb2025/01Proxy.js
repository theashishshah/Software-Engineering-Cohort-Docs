const user = {
    name: "Ashish Shah",
    age: 21,
    password: "123"
}

const proxiedUser = new Proxy(user, {
    get(targett, propt) {
        // console.log(target)
        console.log(propt)
        if (propt === "password") {
            throw new Error("Access denied.")
        }
        return targett[propt]
    },
    
    set(target, props) {
        if (value < 0) {
            throw new Error("Negative age.")
        }
        target[prop] = value;
        return true
        
    }
})

// console.log(proxiedUser)
// console.log(proxiedUser.password)
proxiedUser.age = 0
console.log(proxiedUser.age)



// let naam = "shah";
// user.naam = "Ashish shah"
// console.log(user.naam)

// let naam = "shah";
// user[naam] = "Ashish shah"
// console.log(user.shah)
