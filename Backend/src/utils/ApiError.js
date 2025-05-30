class ApiError extends Error{
    constructor(statusCode, message="Somthing Went Wrong!", errors = [], stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.errors = errors;
        this.success = false;

        if (stack) {
            this.stack = stack;
        }else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}   

export {
    ApiError
}