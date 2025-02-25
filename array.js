const array1 = [5, 12, 8, 130, 44];
console.log(array1[3]) // 130
console.log(array1[-3]) // undefined // 130
console.log(array1.at(1)) // 12
console.log(array1.at("2"))  // 8

array1[0] = "Ashish"
console.log(array1["0"])
console.log(array1["2"])
console.log(array1[""])

/**
 * why do we need at method at the first place?
 *  - because at method allows us to use negative indexing but bracket notation won't
 * you cannot use array[-1] like you may in Python or R, because all values inside the square brackets are treated literally as string properties,
 */

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f", ["Ashish", "shah", ["he", ["hi", ["thi"]]]]];
const array3 = array1.concat(array2);
array3[0] = "Ashish"
console.log(array3);
console.log(array1);
console.log(array2);

// const arrayOne = [, , , , ,]
console.log(arrayOne.length)  // 5

const arrayOne = [[1,[9]], 2, 3, 4, 5, 6]
console.log(arrayOne[0][1].push(34))
console.log(arrayOne[0][1])





