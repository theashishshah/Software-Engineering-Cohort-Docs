const array = [, 1, 2, 4, 6, 33, 89, 34]

// signature: 
// return: the element of an array
// input: index-> positive as well as negative

if(!Array.prototype.myAt){
    Array.prototype.myAt = function(index){

        const lengthOfArray = this.length

        if(index < lengthOfArray && index >= 0){
            return this[index]
        }else if(index <= -1 && index >= -lengthOfArray){
            return this[lengthOfArray + index]
        }else return undefined;

    }
}

const emptyArray = []
console.log(array.length)
console.log(emptyArray.myAt(1))
console.log(emptyArray.at("Ashish"))
