// console.log('__filename:', __filename);
// console.log('__dirname:', __dirname);
// console.log('exports:', exports);
// console.log('module:', module);
// console.log('require:', require);

/** Steps how NodeJS exectute our code
 *  1️⃣ Node.js reads the file (fs.readFileSync()).
    2️⃣ It wraps the code inside a function.
    3️⃣ It compiles the function using vm.runInThisContext().
    4️⃣ It executes the function (compiledWrapper.call(...)).
    5️⃣ Your JavaScript file runs with access to exports, require, module, __filename, __dirname.
 */

function sayHello(name) {
    console.log(`Hello ${name}`);
    console.log(arguments.callee.toString());
}
sayHello("Ashish")










// sayHello('Ashish')(function (exports, require, module, __filename, __dirname) {
//     // Your actual JavaScript code from `myfile.js`
//     function sayHello(name) {
//         console.log(`Hello ${name}`);
//     }
//     sayHello('Ashish');
// });

// Using this function node compiles our code and execute it.
// function NativeModule.prototype.compile() {
//     // 1️⃣ Wrap the file content in a function
//     const wrapper = NativeModule.wrap(content);

//     // 2️⃣ Compile the function into JavaScript using the V8 `vm` module
//     const compiledWrapper = vm.runInThisContext(wrapper);

//     // 3️⃣ Execute the function, passing useful arguments
//     compiledWrapper.call(this.exports, this.exports, require, this, __filename, __dirname);
// }

/**
 * 🟢 Step 5: Your Code Runs with Scope Isolation
Since your code is inside a function, it does not pollute the global scope.

For example, if you define a variable inside myfile.js:

const secret = "I am hidden!";
It does not leak into the global scope because it is inside the wrapper function.
 * 
 * 
 */
