const errorHandler = (err, req, res, next) => {
    
    if (err.statusCode) {
        return res.status(err.statusCode).json({
            message: err.message,
            stackTrace: Error.captureStackTrace(err)
        });
    }

    return res.status(500).json({
        message: err.message,
        stackTrace: Error.captureStackTrace(err)
    });
};


module.exports = errorHandler;
