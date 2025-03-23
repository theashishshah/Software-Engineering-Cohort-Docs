const myExpress = require("./myExpress.js")

const app = myExpress()

app.get("/data", (req, res) =>{
    
})

app.myListen(9999, () =>{
    console.log("Server is listening at port number 9999.")
})