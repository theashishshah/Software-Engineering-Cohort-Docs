const array = [3,, ,  5, 6]

for (let index = 0; index < array.length; index++) {
    if(index in array){
        console.log(`${index}`)
    }

}