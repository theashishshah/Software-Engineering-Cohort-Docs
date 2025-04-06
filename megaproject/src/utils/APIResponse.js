class APIResponse {
    constructor({ message = "Success", statusCode = 200, data = null } = {}) {
        // Validate status code
        if (typeof statusCode !== "number" || statusCode < 100 || statusCode > 599) {
            throw new Error("Invalid status code. It should be a number between 100 and 599.");
        }

        // Validate message
        if (typeof message !== "string") {
            console.warn("APIResponse: Message should be a string. Defaulting to 'Success'.");
            message = "Success";
        }

        //Validate data
        if (data !== null && typeof data !== "object") {
            console.warn("APIResponse: Data should be an object or null. Defaulting to null");
            data = null;
        }

        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 400;
        this.timestamp = new Date().toISOString(); // Use ISO string for consistency
    }

    toJSON() {
        // Allows for easy serialization (e.g., for sending as JSON)
        return {
            message: this.message,
            statusCode: this.statusCode,
            data: this.data,
            success: this.success,
            timestamp: this.timestamp,
        };
    }

    toString() {
        //provide a string representation of the object
        return `APIResponse: { message: "${this.message}", statusCode: ${this.statusCode}, success: ${this.success}, timestamp: ${this.timestamp}, data: ${JSON.stringify(this.data)}}`;
    }

    static success(data, message = "Success", statusCode = 200) {
        return new APIResponse({ message, statusCode, data });
    }

    static error(message = "Error", statusCode = 500, data = null) {
        return new APIResponse({ message, statusCode, data });
    }
}

// Example usage:
try {
    const successResponse = APIResponse.success({ user: "John Doe" }, "User retrieved", 200);
    console.log(successResponse.toJSON());
    console.log(successResponse.toString());

    const errorResponse = APIResponse.error("Server error", 500);
    console.log(errorResponse.toJSON());

    const invalidResponse = new APIResponse({ statusCode: 600 }); // Should throw an error
} catch (error) {
    console.error(error.message);
}

try {
    const invalidMessage = new APIResponse({ message: 123 });
} catch (error) {}

try {
    const invalidData = new APIResponse({ data: "hello" });
} catch (error) {}

export default APIResponse;
