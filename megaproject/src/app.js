import express from "express"
import healthcheckRouter from "../src/routes/healthcheck.route.js"

const app = express()

app.use("/api/v1/healthcheck", healthcheckRouter)
// router implementation

export default app