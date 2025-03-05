function one(fn, delay) {
    let id;
    return function () {
        clearTimeout(id);
        console.log(id)
        id = setTimeout(() => {
            // console.log(this)
            fn.apply(this, args);
        }, delay * 1000);
    };
}

const cb = () => {
    console.log('Hello from callback function');
};

const fn = one(cb, 3);
fn(["hello"]);
fn(["hello"]);
fn(["hello"]);



// let myname;
// function two(naam) {
//     console.log(myname);
//     myname = naam;
//     console.log(`my name is ${myname}`);
// }
// two(3)
// myname = "Ashish"
// two(325)
// two(21)
// two(23)
// two(34)
