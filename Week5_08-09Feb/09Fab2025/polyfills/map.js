// signature: return: new array, input: a callback function with value and index of array

const arr = [2, 4, 5, 6, 7, 0]

// const updatedArr = arr.map(function(value, index){
//     return value*value
// })

if(!Array.prototype.map){
    Array.prototype.map = function (callback) {
        const originalArray = this
        const newArray = []
        for (let i = 0; i < originalArray.length; i++){
            console.log("Mera wala call hua.")
            newArray.push(callback(originalArray[i], i))
        }
        return newArray
    }    
}
const updatedArr = arr.map(function (value, index) { 
    return value * value 
})

console.log(updatedArr)