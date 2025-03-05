function one(fn, delay){
    const args = arguments
    let myId;
    return function(){
        clearTimeout(myId)
        // console.log(`Initial myId value ${myId}`)
        myId = setTimeout(() => {
            console.log(`${this.name} and age ${this.age}`)
            fn.apply(this, args) // why did I use apply(): cuz rn idk on which context fn will be called
        }, delay * 1000);
        // console.log(`After setTimeout myId value ${myId}`)
        // console.log(typeof myId)
    }
}

const cb = (...args) =>{
    console.log(`This is callback function.`)
    console.log(this)
    console.log(args)
}

const tempUser = {
    age: 33,
    name: "Abhay sharma"
}
// tempUser.one(cb, 3)

const fn = one(cb, 2).bind(tempUser)
fn()
// fn()
// fn()
// fn()

/**  Two things happens with us: when a user presses a button so many times
 * 1. pehle wale ko mai le lu and sare ko discard krdu
 * 2. button press -> wait 3secs and if within 3 secs button is pressed again -> wait 3secs, and repeat this process
 * 
 */




function two(fn, delay){
    let id;
    return function(){
       clearTimeout(id) 
       id = setTimeout(() => {
            fn()
       }, delay * 1000);
    }
}
const databaseCall = () =>{
    console.log("got the user's data from database.")
}

function wait(){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            console.log("running after 3 seconds.")
            res()
        }, 3 * 1000);
    })
}

async function temp() {
    const fn = two(databaseCall, 2)  // I got fn as function instant
    fn()  // this will give result after two second and this is also a background task cuz fn() is registering setTimeout which is bg task
    console.log("Waiting for 3 seconds...")
    await wait()
    console.log("Wait is over.")
    fn()
    fn()
    console.log("last call")

}
temp()

