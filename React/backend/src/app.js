import express from "express";
import cors from "cors"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// app.get("/", (req, res) => {
//     res.send("Home baby")
// })

app.post("/api/form", (req, res) => {
    // console.log(req.body)
    const { name, email, password } = req.body
    console.log("name: ", name)
    res.status(200).json({
        success: true,
        message: "From submitted successfully."
    })
})

app.listen(6969, () => console.log("Your server is running on port 6969"))