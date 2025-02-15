const arrayOne = [, 1, 2, 4, 55, 6, 6]
const arrayTwo = [3, 5, 21, 523, 5]
const arrayThree = [84, 53, 22, 1, ,]

// Signature:
// return: new array with all valus, as well holes
// input: multiple arrays (spread operator use)

if (!Array.prototype.myConcat) {
    Array.prototype.myConcat = function (...arrays) {

        const resultantArray = []

        for (let i = 0; i < this.length; i++) {
            resultantArray.push(this[i])

        }

        for (let i = 0; i < arrays.length; i++) {
            let individualArrayLength = arrays[i].length;
            for (let j = 0; j < individualArrayLength; j++) {
                resultantArray.push(arrays[i][j])
            }
        }

        // chatGPT code
        // arrays.forEach(array => {
        //     if (Array.isArray(array)) {
        //         array.forEach(item => {
        //             resultantArray.push(item);
        //         });
        //     }
        // });
        

        return resultantArray
    }
}



const concatnatedArray = arrayOne.myConcat(arrayTwo, arrayThree)
const relArray = arrayOne.concat(arrayTwo, arrayThree)
console.log(relArray)
console.log(concatnatedArray)
