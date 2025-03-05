// function one(fn, delay) {
//     console.log(arguments)
//     // console.log(parameters)
//     let id = null;
//     return function (...args) {
//         console.log(args)
//         if(id === null){
//             fn(args)
//             id = setTimeout(() => {
//                 id = null
//             }, delay * 1000);
//         }

//     };
// }

// const cb = (args) => {
//     console.log(`Value of args: ${args}`);
// };

// const fn = one(cb, 2)
// const arr = [1, 3, 5, 6, 7]
// fn(arr, "this 1")
// fn(arr, "this 2")
// fn(arr, "this 3")

function ptaNhi(fn, delay) {
    // console.log(parameters)
    // console.log(arguments) //output: [Arguments] { '0': [Function: cb], '1': 2 }
    // const arg = arguments
    let myId;
    return function (...args) {
        // console.log(arguments); //output: [Arguments] {
        //                         //     '0': 'Ashish',
        //                         //     '1': 'Shah',
        //                         //     '2': '21YO',
        //                         //     '3': 'bangalore'
        //                          //   }
        // console.log(arg)   // this arg will have the ptaNhi fn arguments' value: 
        // //output: [Arguments] { '0': [Function: cb], '1': 2 }
        // console.log(args);   // [ 'Ashish', 'Shah', '21YO', 'bangalore' ] passed by calling fn 
        clearTimeout(myId);
        console.log(myId)
        myId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const cb = (args) => {
    console.log(`Value of args: ${args}`);
}

const fn = ptaNhi(cb, 2);
fn("Ashish", "Shah", "21YO", "bangalore");
fn("Ashish", "Shah", "21YO", "bangalore");
fn("Ashish", "Shah", "21YO", "bangalore");
fn("Ashish", "Shah", "21YO", "bangalore");




// function two(){
//     let name = "Ashish"
//     setTimeout(() => {
//         console.log("Name is ", name)
//     }, 2 * 1000);
// }
// two()

// const user = {
//     name: "Ashish shah",
//     age: 21,
//     greet: function(){
//         console.log(`Hello ${this.name}, Welcome to Land Rover showroom.`)
//     }
// }
// setTimeout(user.greet, 2 * 1000);

// let args = "something"
// const em = () => {
//     fn(args);
// }
