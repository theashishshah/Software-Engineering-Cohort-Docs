// works on 'string, array, and object'

const arrayOne = [2, 4, 5, 67, 22]
const arrayTwo = [84, 33, 20, 93, 44]
const arrayThree = [3, 45, 90, 3002, 356]
const arrayFour = [48, 93, 43, 20]

function add(...array) {
    console.log(array[0].length)
    const result = []
    // how can i get each element of the array
    for (let i = 0; i < array.length; i++) {
        let len = array[i].length;
        for (let j = 0; j < len; j++) {
            // console.log(array[i][j])
            result.push(array[i][j])
        }
    }
    return result
}

console.log(add(arrayOne, arrayTwo, arrayThree, arrayFour))