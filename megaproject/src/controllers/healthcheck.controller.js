import APIResponse from "../utils/APIResponse.js"


const healthcheck = (req, res) =>{
    res.status(200).json(
        new APIResponse({
            message: "Server is up running",
            statusCode: 200,
            data: {
                message: "Everything is running fine in healthcheck route",
                status: 200
            }
        })
    )
}

export { healthcheck}