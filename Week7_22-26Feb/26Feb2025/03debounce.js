function one(fn, delay) {
    let id;
    return function (args) {
        clearTimeout(id);
        id = setTimeout(() => {
            fn.apply(this, args);
        }, delay * 1000);
    };
}

const cb = () => {
    console.log('Hello from callback function');
};

const fn = one(cb, 3);
fn();
fn();
fn();

let myname;
function two(naam) {
    console.log(myname);
    myname = naam;
    console.log(`my name is ${myname}`);
}
// two(3)
// myname = "Ashish"
// two(325)
// two(21)
// two(23)
// two(34)
