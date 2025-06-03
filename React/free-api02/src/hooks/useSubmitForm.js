import { useState } from "react";

export default function useSubmitForm() {
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setErrorMessage] = useState(null)

    const submitHandle = async (formData) => {
        setLoading(true)
        setSuccessMessage(null)
        setErrorMessage(null)
        
        try {
            const formResponse = await fetch("/api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
           
            const data = await formResponse.json()
            console.log(data)
            if (!formResponse.ok) throw new Error(data.error || "Something went wrong while submitting data.")

            setSuccessMessage(data.message || "Data sent successfully.")
        } catch (error) {
            console.log("Frontend: error while submitting from", error)
            setErrorMessage(error.message || "Requeset failed.")
        } finally {
            setLoading(false)
        }
    }
    return { loading, successMessage, error, submitHandle }
    // const [loadingValue, successMsg, errorMsg, sendContact] = useContactForm();

}