class ApiResponse {
    constructor(message = "Success",data = null, statusCode = 200) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;
    }
}

export {
    ApiResponse
}