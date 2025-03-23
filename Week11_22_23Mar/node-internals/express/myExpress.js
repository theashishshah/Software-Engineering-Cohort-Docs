const http = require("http")

const myExpress = () =>{
    const myApp = {
        myListen: (port, cb) =>{
            const server = http.createServer(() =>{
                console.log("Inside createServer method.")
            })
            server.listen(port, () =>{
                cb()
            })
        },
        get: ("/data", callback),
        post: "Something in post",
        delete: "Something in delete"
    }

    return myApp
}

module.exports = myExpress

































// const http = require("http")

// const handlerFunction = (req, res) =>{

//     // middleware
//     (function (){
//         console.log("this is the middleware of my custom express.")
//     })()

//     if(req.method === 'POST' && req.url === '/data'){
//         let body = ""
//         req.on("data", chunk =>{ 
//             body += chunk.toString()
//         })
//         req.on("end", () =>{
//             console.log("All data recieved successfully.", body)
//             res.end("Got the data\n")
//         })
        
//     }
//     if(req.method === 'GET'){
//         res.end("Thnak you for getting data.\n")

//     }
// }


// const server = http.createServer(handlerFunction)

// server.listen(9999, () =>{
//     console.log(`Server is listening on port 9999.`)
// })