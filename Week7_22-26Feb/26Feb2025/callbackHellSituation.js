const fs = require('fs');

console.log('Start of program...');

// here I'll get call back hell
// fs.readFile("hello.txt", "utf-8", (err, data) =>{
//     if(err) throw new Error(`Got error while reading the file ${err}`)
//     console.log("Got the data from hello.txt file: ", data)

//     fs.writeFile("backup.txt", data, (err) =>{
//         if(err) throw new Error(`Got error while creating backup file ${err}`)
//         console.log("created backup file.")

//         fs.unlink("hello.txt", (err) =>{
//             if(err) throw new Error(`Got error while deleting the file ${err}`)
//             console.log("File deleted successful.")
//         })
//     })
// })

// To solve this callback hell, promise was introduced
function readFileFunction(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                console.log(
                    `Got error while reading the file hello.txt ${err}`
                );
                reject(err);
            } else {
                console.log(
                    `File reading hello.txt succesfull, here is the data: ${data}`
                );
                resolve(data);
            }
        });
    });
}

function writeFileFunction(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.log(`Got error while creating backup file ${err}`);
                reject(err);
            } else {
                console.log(`Backup file created successful.`);
                resolve();
            }
        });
    });
}

function deleteFileFunction(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(`Got error while deleting file ${err}`);
                reject(err);
            } else {
                console.log(`File deleted successful.`);
                resolve();
            }
        });
    });
}

//-----------we gave the support of promise to callback hell -------------------------
async function doTasks() {
    try {
        const data = await readFileFunction('hello.txt', 'utf-8');
        await writeFileFunction('backup.txt', data);
        await deleteFileFunction('hello.txt');
        console.log('mai to hmesha hi chlunga.');
    } catch (error) {
        throw new Error(`Got error while doing the operation. ${error}`);
    }
}
doTasks();

// readFileFunction("hello.txt", "utf-8")  // NOTE: these tasks are in sync, we can add syntactic sugar
//     .then((data) => writeFileFunction("backup.txt",data))
//     .then(() => deleteFileFunction("hello.txt"))
//     .catch(err => console.log(err))
//     .finally(() => console.log("mai to hmesha hi chlunga."))

console.log('End of program.');
