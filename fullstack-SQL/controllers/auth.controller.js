import { PrismaClient } from "@prisma/client"
const Prisma = new PrismaClient()

export const signup = async (req, res)=> {
    console.log("Inside the controller")
    await Prisma.user.findUnique({
        where: {email}
    })
}