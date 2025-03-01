console.log("Hi")

let data = fetch("https://api.freeapi.app/api/v1/public/randomproducts")
    .then((res) => {
        console.log(res)
    })
console.log("Data is ", data)
console.log("Bye")
