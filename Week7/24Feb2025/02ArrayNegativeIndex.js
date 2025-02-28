// console.log(arr.at("-7"))
// console.log("-7".length)

// proxy take reference

function negativeIndexing(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            if (typeof prop === "string" && prop.length == 2) {
                const index = Number(prop)
                if (index < 0) {
                    return target[target.length + index]
                }
                return target[index]
            } else {
                const index = Number(prop)
                if (index < 0) {
                    return target[target.length + index]
                }
                return target[index]
            }
        },
        // now enable negative indexing setting as well
        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
                
            } else {
                target[index] = value
            }
            return true
            
        }
    })
}

const arr = [1, 2, 4, 6, 7, 9, 32]

const proxiedArray = negativeIndexing(arr)
console.log(proxiedArray[-7])
proxiedArray[-1] = 10
console.log(proxiedArray[-1])
console.log(arr[6])