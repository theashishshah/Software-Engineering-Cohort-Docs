import axios from "axios"
import { useEffect, useState } from "react"

export default function useGetQuotes() {
    const [loading, setLoading] = useState(true)
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const freeapiURL = "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human"
                const options = {
                    headers: {
                        Accept: "application/json"
                    }
                }
                const apiResponse = await axios.get(freeapiURL, options)
                setQuotes(apiResponse.data.data.data)
            } catch (error) {
                console.error("Error while fetching the data: ", error)
            } finally {
                setLoading(false)
            }
        }
        fetchAPI()
    }, [])

    return [quotes, setQuotes]
}