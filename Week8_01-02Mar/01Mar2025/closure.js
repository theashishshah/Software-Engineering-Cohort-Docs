let fname = "Ashish"
function sayName(){
    let lname = "Shah"
    function inner() {
        let age = 21;
        function innerToInner() {
            let year = 2026
            console.log("Fname from globa closure,", fname, "Lname from sayName closure,", lname, "and age, ", age, "year, ", year)
            return;
        }
        innerToInner()
    }
    inner()
}
console.log("Value of fname is ", fname);
sayName();