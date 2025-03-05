// write custom promise here: imagine Promise doesn't exist in the JS, how will you implement it?
const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class MyPromise{
    constructor(executerFn){
        this.state = STATE.PENDING
        executerFn(resolve, reject)
    }

    resolve(){

    }
    reject(){

    }
}

const cb = (resolve, reject) =>{
    resolve()
}

const p = new MyPromise()
console.log(p._state)






/** Promise Signature
 * Promise(executerFn)
 * excuterFn(res, rej) =>{
 * if work is done successfully 
 *  call res()
 * else
 *  call rej()
 * ----------
 * but when you can res .then() method should run
 */



// console.log(`Starting of program.`);

// function loadContent() {
//     return new MyPromise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(`Heavy task is done here`);
//             resolve('https://example.com/');
//         }, 1000);
//     });
// }

// loadContent()
//     .then((data) => console.log(`Data is ${data}`))
//     .then((d) => console.log("Can I do this?"))
//     .then((dd) => console.log("You can log as many as then functions you want."))

// console.log(`Program ended.`);



// loadContent()
//     .then((succ) => {
//         console.log(`First .then() is running with result:`, succ);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(`Second heavy task done.`);
//                 resolve(`https://newexample.com/`);
//             }, 1000);
//         });
//     })
//     .then((k) => {
//         console.log(`Second .then() is running with result:`, k);
//         return new Promise((resolve, reject) => {
//             resolve(`Final result: ${k}`);
//         });
//     })
//     .then((finalResult) => console.log(`Final .then() result:`, finalResult))
//     .catch(() => console.log(`Fail wala run hua hai.`));

