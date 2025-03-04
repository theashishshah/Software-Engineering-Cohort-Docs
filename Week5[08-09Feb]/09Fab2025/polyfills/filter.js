const arr = [3, 5, 7, 3, 6, 8, 18]

// Signature: return: new Array but which satisfy the conditions
// input: callback fn with value and index parameter

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        console.log("user defined filter called.")

        if (typeof callback !== 'function') {
            throw new TypeError(callback, " is not a function. Please provide a valid function.")
        }

        const filteredArray = []

        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                const value = callback(this[i], i, this)
                if (value) {
                    filteredArray.push(this[i])
                }
            }
        }
        return filteredArray
    }
}

const updatedArray = arr.myFilter(function (value, index) {
    if (value % 3 !== 0) {
        return true
    } else {
        return false;
    }
})

console.log(updatedArray)

// const updatedArray = arr.myFilter(function (value, index) {
//     if (value % 2 === 0) {
//         return value
//     } else {
//         return false;
//     }
// })
