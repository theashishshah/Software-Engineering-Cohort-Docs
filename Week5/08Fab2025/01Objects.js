const person = {
    age: 21,
    fname: "Ashish",
    lname: "Shah",
    hobbies: ["coding", "UI/UX", "Business strategy"],
    hasGF: false,
    isMarried: false,
    hasCrush: Infinity,
    getFullName: function () {
        return "Ashish Shah"
    },
    address: {
        h: 1,
        street: 92,
        countryCode: "IN",
        areaCode: 560004,

    },
    bankAccount: {
        accountHolderName: "Ashish Shah",
        accountNumber: "1BI22CS025",
        balance: {
            currentBalance: 0.0,
            savings: 50000,
            futureBalance: 90000000000000
        }
    }
}
console.log(typeof person.hasCrush)
console.log(person.hasCrush)

// console.log(person);


