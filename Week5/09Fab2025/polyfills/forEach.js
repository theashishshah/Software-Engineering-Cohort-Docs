const arr = [2, 4, 5, 6, 7]

// Understand real signature of methods - No return, function as input parameter with value of each array and corrosponding index, and call myFn for every value


if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originalArray = this
        for (let i = 0; i < originalArray.length; i++) {
            userFn(originalArray[i], i)
        }
    }
}

arr.myForEach(function (value, index) {
    console.log(`Value at index ${index} is ${value}`)
})
// console.log(ret)