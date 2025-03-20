import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import cors from 'cors'
import useRouter from "./routes/auth.route.js"


const app = express()
const PORT = process.env.PORT || 5432

app.use(cookieParser())
app.use(cors({
    origin: process.env.BASE_URI
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res)=>{
    console.log("Listening")
    res.status(200).json({
        message: "Hello ji"
    })
})

app.use("/api/v2/users/", useRouter)

app.listen(PORT, () =>{
    console.log(`Our server is listening on port ${PORT}`)
})