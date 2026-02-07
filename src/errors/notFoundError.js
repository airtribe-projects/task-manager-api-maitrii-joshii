const AppError = require('./appError');

class NotFoundError extends AppError {
    constructor(resource = 'Resource') {
        super(`${resource} not found`, 404);
    }
}


module.exports = NotFoundError;
