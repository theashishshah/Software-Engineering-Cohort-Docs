const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "Low"
}

console.log(teas["name"]);
console.log(teas["type"]);

teas.origin = "China"

teas.caffine = "Medium"


delete teas.type
console.log(teas);

console.log("origin" in teas)

for (const key in teas) {
    console.log(`${key}: ${teas[key]}`);
    
}


const myTeas = {
    greenTea:{
        name: "Green tea"
    },

    blackTea: {

    }
}

const teaCopy = {
    ...teas
}



