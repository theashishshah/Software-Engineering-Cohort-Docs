const arr = [1, 2, 4, 5, 6, 7, 9]
function enableNegativeIndexing(targetArr) {
    return new Proxy(targetArr, {
        get(target, prop) {
            return target[prop]
        },
        set(target, prop, value) {
            target[prop] = `${value}🔥`
        }
    })
}

console.log("Original array: ", arr)
const proxiedArray = enableNegativeIndexing([...arr])
proxiedArray[0] = "Ashish"
console.log("Updated original array: ", arr)
console.log("Updated proxied array: ", proxiedArray)
