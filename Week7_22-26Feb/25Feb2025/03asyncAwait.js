/**
 * there might be a chance that we go into callback hell into .then() .catch() .finally()
 * to solve this, async await came into picture or
 * or to solve the promise chain we use async await
 */

// ----------------Syntactic sugar ----------------


// The whole code is async but but promise are running in synchronous fashion
console.log(`Starting of program...`)

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

function wait(sec) {
    return new Promise((resolve, rejcect) => {
        setTimeout(() => {
            resolve()
        }, sec * 1000);
    })
}

async function runProgram() {
    try {
        const rel = await readFileWithPromise("hello.txt", "utf-8")
        await writeFileWithPromise("backup.txt", rel)
        // wait 10 sec here then executed next line
        await wait(10)
        await deleteFileWithPromise("hello.txt")
    } catch (error) {
        console.log(`Error mil gya ji`, error)
    } finally {
        // console.log(`Lo ji mai bhi chl gya.`)
    }
}

runProgram()
    // .then(() => console.log(`All done!`))
    // .catch(() => console.log(`Kuchh to ho gya`))
    // .finally(() => console.log(`Mai to hmesha chlunga ji.`))

    
    
    
// readFileWithPromise("hello.txt", "utf-8")
//     .then(con => writeFileWithPromise("backup.txt", con))
//     .then(() => deleteFileWithPromise("hello.txt"))
//     .catch(err => console.log(`Error while reading file`, err))
//     .finally(() => console.log(`Mai to bhai hmesha chalunga.`))

console.log(`Program end.`)