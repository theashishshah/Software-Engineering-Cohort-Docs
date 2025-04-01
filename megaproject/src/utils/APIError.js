/**
 * Custom error class for handling API errors with HTTP status codes and detailed error information.
 */
class APIError extends Error {
    /**
     * Constructs an APIError instance.
     *
     * @param {number} statusCode - The HTTP status code of the error (100-599).
     * @param {string} message - The error message.
     * @param {Array<object|string>} [errors=[]] - An array of error details (optional).
     * @param {string} [stack=""] - The error stack trace (optional).
     * @param {boolean} [isOperational=true] - Indicates if the error is operational (expected) (optional).
     *
     * @throws {Error} If the statusCode is not a valid HTTP status code.
     */
    constructor(statusCode, message, errors = [], stack = "", isOperational = true) {
        super(message);

        // Validate the status code
        if (statusCode < 100 || statusCode >= 600) {
            throw new Error(`Invalid HTTP status code: ${statusCode}`);
        }

        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.errors = errors;
        this.isOperational = isOperational;
        this.name = this.constructor.name; // Set error name to class name

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture stack trace if not provided
        }
    }

    /**
     * Converts the error object to a JSON-serializable format.  Useful for API responses.
     *
     * @returns {object} A JSON representation of the error.
     */
    toJSON() {
        const json = {
            success: this.success,
            statusCode: this.statusCode,
            message: this.message,
            errors: this.errors,
        };
        // Include stack only in development for security
        if (process.env.NODE_ENV === "development") {
            json.stack = this.stack;
        }
        return json;
    }

    // Static factory methods for common error types.  Improves code readability
    // and consistency.

    /**
     * Creates an APIError from a standard JavaScript Error object.
     *
     * @param {Error} error - The JavaScript Error object to convert.
     * @param {number} [statusCode=500] - The HTTP status code (default: 500 Internal Server Error).
     * @returns {APIError} An APIError instance.
     */
    static fromError(error, statusCode = 500) {
        return new APIError(
            statusCode,
            error.message,
            [{ message: error.message }],
            error.stack,
            false,
        ); // isOperational = false for programmer errors
    }

    /**
     * Creates an APIError for validation errors (HTTP 400 Bad Request).
     *
     * @param {number} [statusCode=400] - The HTTP status code (default: 400).
     * @param {string} [message="Validation Error"] - The error message.
     * @param {Array<object>} [errors=[]] -  Validation error details.
     * @returns {APIError} An APIError instance.
     */
    static validationError(statusCode = 400, message = "Validation Error", errors = []) {
        return new APIError(statusCode, message, errors);
    }

    /**
     * Creates an APIError for "Not Found" errors (HTTP 404).
     *
     * @param {string} [message="Not Found"] - The error message.
     * @returns {APIError} An APIError instance.
     */
    static notFound(message = "Not Found") {
        return new APIError(404, message);
    }

    /**
     * Creates an APIError for "Forbidden" errors (HTTP 403).
     *
     * @param {string} [message="Forbidden"] - The error message.
     * @returns {APIError} An APIError instance.
     */
    static forbidden(message = "Forbidden") {
        return new APIError(403, message);
    }

    /**
     * Creates an APIError for "Unauthorized" errors (HTTP 401).
     *
     * @param {string} [message="Unauthorized"] - The error message.
     * @returns {APIError} An APIError instance.
     */
    static unauthorized(message = "Unauthorized") {
        return new APIError(401, message);
    }

    /**
     * Creates an APIError for "Bad Request" errors (HTTP 400).
     *
     * @param {string} [message="Bad Request"] - The error message.
     * @param {Array<object>} [errors=[]] -  Error details.
     * @returns {APIError} An APIError instance.
     */
    static badRequest(message = "Bad Request", errors = []) {
        return new APIError(400, message, errors);
    }

    /**
     * Creates an APIError for "Conflict" errors (HTTP 409).
     *
     * @param {string} [message="Conflict"] - The error message.
     * @returns {APIError} An APIError instance.
     */
    static conflict(message = "Conflict") {
        return new APIError(409, message);
    }

    /**
     * Creates an APIError for "Internal Server Error" errors (HTTP 500).
     *
     * @param {string} [message="Internal Server Error"] - The error message.
     * @returns {APIError} An APIError instance.
     */
    static internalServerError(message = "Internal Server Error") {
        return new APIError(500, message, [], "", false); // isOperational = false for unexpected server errors
    }
}

export { APIError };







// class APIError extends Error {
//     constructor(
//         statusCode,
//         message = "This is Generic API Error Message.",
//         errors = [],
//         stack = "",
//     ) {
//         super(message);
//         this.statusCode = statusCode;
//         this.message = message;
//         this.success = false;
//         this.errors = errors;
//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }
//     }
// }

// export { APIError };
