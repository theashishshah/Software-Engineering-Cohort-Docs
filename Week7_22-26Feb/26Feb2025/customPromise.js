/** 
 * Promise Signature...
 *  Promise((resolve, reject) =>{ 
 *  kam kro, agar ho gya to resolve
 *  resolve()
 *  agar ni hua to             
 *  reject() 
 * })
 */

function wait(seconds) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(`Ho gya ji resolve`)
        }, seconds * 1000);
    })
}

await wait(10)
    .then(() => console.log(`Promise resolved after 10 secs`))  
    .catch(() => console.log(`Promise rejected after 10 secs`))  
    .finally(() => console.log(`Finnaly`))

console.log("setting")
