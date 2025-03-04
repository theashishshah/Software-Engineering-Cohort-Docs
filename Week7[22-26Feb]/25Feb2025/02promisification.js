/**
 * callback hell -> fsv2(promise) -> do promisification: converting legacy code to support promises
 */
const fs = require("fs")

function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) reject(err)
            resolve(content)
        })

    })
}

function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) reject(err)
            console.log("File saved successfull!")
            resolve()
        })
    })
}

function deleteFileWithPromise(filepath) {
    return new Promise((res, rej) => {
        fs.unlink(filepath, (err) => {
            if (err) rej(err)
            res()
        })
    }
    )
}

async function runProgram() {
    try {
        const rel = await readFileWithPromise("hello.txt", "utf-8")
        await writeFileWithPromise("backup.txt", rel)
        await deleteFileWithPromise("hello.txt")
    } catch (error) {
        throw error
    }
}

runProgram()

// readFileWithPromise("hello.txt", "utf-8")
//     .then(con => writeFileWithPromise("backup.txt", con))
//     .then(() => deleteFileWithPromise("hello.txt"))
//     .catch(err => console.log(`Error while reading file`, err))
//     .finally(() => console.log(`Mai to bhai hmesha chalunga.`))


// -----------------------Legacy code -----------------------

// fs.readFile("./hello.txt", "utf-8", (err, content) => {
//     if (err) {
//         console.log("Error reading file:", err)
//     } else {
//         fs.writeFile("./backup.txt", content, (err) => {
//             if (err) throw err
//             console.log("The file has saved!")
//             fs.unlink("./hello.txt", (err) => {
//                 if (err) throw err
//                 console.log("hello.txt has deleted!")
//                 fs.writeFile("filedelete.txt", "This is content only I have", (err) => {
//                     if (err) throw err
//                     console.log(`File delete.txt create succussfully.`)
//                 })
//             })
//         })
//     }
// })