class errorHandler extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddleWare = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
 return   res.status(err.statusCode).json({
        success: false,
        message: err.message,
        error: err.stack
    });

}
export default errorHandler;