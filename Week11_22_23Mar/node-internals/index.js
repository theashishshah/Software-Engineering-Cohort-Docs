const fs = require("fs")
console.log("Log module: ",module)
fs.writeFile("hello.txt", "Hello World", (err) =>{
    console.log("Error: ", err)
    console.log("file has been written.")
})