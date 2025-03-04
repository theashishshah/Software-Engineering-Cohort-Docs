/**
 console.log("Starting program...")
 // const contents = fs.readFileSync("./hello.txt", "utf-8")
 fs.readFile("./hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Got error during reading the file", err)
        } else {
            console.log("contents of the file is: ", data)
    }
    })
    // console.log("file content: ", contents)
    console.log("End of program.")
    
    */

const fs = require("fs")
const fsv2 = require("fs/promises")

console.log("Start of the program...")

// function readFilefn() {
//     const fileContent = fs.readFile('./hello.txt', "utf-8", (err, data) => {
//         console.log(data)
//     })
//     console.log("File reading...")
//     return fileContent;
// }
// // readFilefn()
// console.log(readFilefn())


/** we made a normal function as Async...***************************************************
 * here we didn't need sum value, so its fine but what if I need that sum and it is taking much time, to time wait hi krna hoga, we don't have other options
 * before promises, developers haviely rely on cb
*/


// function getWeather(cb) {
//     // getting weather here...
//     cb(weatherData)
// }

// getWeather(() => {
//     // send to user data...
// })


// sum(4, 5, (sum) => {
//    console.log("Sum is:", sum)

// })
// function sum(a, b, cb) {
//     // here if data was being fetched that's fine also
//     setTimeout(() => {
//         cb(a+b)
//     }, 0);
// }





// 1. Read the contents of file from hello.txt
// 2. Then create a new file named as backup.txt
// 3. Copy the contents of hello file to backup file
// 4. delete the hello file
// 5. if deletes successfully then create a new file and add some data into it.


// -----------------------Legacy code -----------------------
fs.readFile("./hello.txt", "utf-8", (err, content) => {
    if (err) {
        console.log("Error reading file:", err)
    } else {
        fs.writeFile("./backup.txt", content, (err) => {
            if (err) throw err
            console.log("The file has saved!")
            fs.unlink("./hello.txt", (err) => {
                if (err) throw err
                console.log("hello.txt has deleted!")
                fs.writeFile("filedelete.txt", "This is content only I have", (err) => {
                    if (err) throw err
                    console.log(`File delete.txt create succussfully.`)
                })
            })
        })
    }
})

// Callback hell - the problem is just readibility, other then working is fine.
// Callback hell is resolved by promises.


// 1. Read the contents of file from hello.txt
// 2. Then create a new file named as backup.txt
// 3. Copy the contents of hello file to backup file
// 4. delete the hello file
// 5. if deletes successfully then create a new file and add some data into it.

fsv2.readFile("hello.txt", "utf-8")
    .then(content => fsv2.writeFile("backup.txt", content))
    .then(() => fsv2.unlink("hello.txt"))
    .catch(err => console.log(`Error`, err))


// readFileContent
//     .then((content) => {
//         console.log("File read success!\n",)
//         fsv2.writeFile("backup.txt", content)
//             .then((success) => {
//                 console.log(`write file successful!`, success)
//                 fsv2.unlink("hello.txt")
//                     .then((succ) => {
//                         console.log("deleting file success.", succ)
//                     })
//                     .catch((err) => {
//                         console.log(err, `In deleting file.`)
//                     })
//             })
//             .catch((err) => {
//                 console.log(`Error in writing file ${err}`)
//             })
//     })
//     .catch((err) => {
//         throw err
//     })


console.log("End of program.")