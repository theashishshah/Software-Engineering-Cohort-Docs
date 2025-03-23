exports.add = function (a, b) {
    return a + b;
};

exports.sub = function (a, b) {
    return a - b;
};

const myAddress = {
    name: 'Ashish Shah',
    age: 21,
    address: {
        city: 'blr',
        code: 10000,
        street: '1st stage',
    },
};

const subtracting = (a, b) => {
    return a - b;
};

const data = { myAddress, subtracting }
module.exports = data

// do some default export then will see what happens
// module.exports = {
//     myAddress,
//     subtracting,
// };

function adding(a, b) {
    return a + b;
}

// function subtracting(a, b){
//     return a - b
// }

// exports.module = { msg: "Hello", test: "Nice"}

// //default export
// module.exports = {
//     adding, subtracting
// }

/** Notes:
 *  1. if you're exporting both default and named seprately then default export will take the priority
 *  2. if we want to add both default and named then named ko default me daal do
 */
