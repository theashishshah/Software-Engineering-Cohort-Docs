const arrayOne = [1, 2, 3, 5, 5]
// I want to add 2 to each element?
const updatedArray = arrayOne.map((value) => {
    return value ** value;
})
// console.log(updatedArray)

const arrayTwo = [
    { name: "chai", price: 300, category: "Food" },
    { name: "biscuit", price: 320, category: "Snacks" },
    {name: "Sauce", price: 20, category: "Food"}
]

// arrayOne.map((obj) => {
//     console.log()
// })

// const intArray = ["1", "2", "3"].map(parseInt)
// console.log(intArray)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
// const sumWithInitial = array1.reduce(function (ac, curValue) {
//     console.log("Current accu value: ",ac)
//     console.log("Current value:",curValue)
//     return ac + curValue
// });

const sumWithInitial = array1.reduce(function (accu, curValue) {
    return accu + curValue
},)

const value = tempArray.reduce((ac, cur)=>ac+cur, )



console.log(sumWithInitial);
// Expected output: 10
