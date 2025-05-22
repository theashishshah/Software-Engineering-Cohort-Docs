// interface is khud ka type

interface User {
    firstname:  string,
    lastname?: string,
    email: string,
    profileImageURL?: string
}

const payload: User = {
    firstname: "Ashish",
    email: "ashi@gmail.com",
    lastname: "shah",
    profileImageURL: "test.com"
}

