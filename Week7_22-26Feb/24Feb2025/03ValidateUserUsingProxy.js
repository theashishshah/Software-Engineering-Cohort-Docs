// get the data from database and user want to update it

const user = {
    name: "Ashish Shah",
    age: 21,
    password: "123",
    id: 25
}

const proxiedUser = new Proxy(user, {
    set(target, prop, value) {
        if (prop === "age" && (typeof value !== "number" || value <= 0)) {
            throw new Error(`Age must be a positive number.`)
        } else {
            target[prop] = value
        }
        return true
    }
}
)

proxiedUser.age = 0
console.log(proxiedUser.age)
