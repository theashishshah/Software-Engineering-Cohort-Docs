// art is how you define type

function printname(name: string) : string{
    console.log(name)
    return "2"
}
printname("Ashish")

function createUser(user: {firstname: string, lastname?: string}){
    // user.firstname
    // user.lastname?.trim()

    // if(user.lastname){
    //     const trimmedLastname = user.lastname
    // }

    if(!user.lastname) return
    user.lastname.trim()


}
createUser({firstname: "Ashish", lastname: "Shah"})