const fs = require("fs");

// // // Asynchronous read
// const textData = "Hello this is Ashish shah\n"
// fs.appendFile("input.txt", textData, function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data);
// });



const user = {
    name: "Ashish Shah",
    age: 21,
    password: "123",
    id: 32
}

// deny user to access password
const proxiedUser = new Proxy(user, {
    get(target, prop) {
        const date = new Date();
        const textData = `Property "${prop}" was accessed at ${date.toLocaleString("en-IN")}.\n`
        fs.appendFile("log.txt", textData, function (err, data) {
            if (err) {
                return console.error(err);
            }
        });
        return target[prop];
    }
})

console.log(proxiedUser.age)