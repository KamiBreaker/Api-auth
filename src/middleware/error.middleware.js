const logger = require("../utils/logger");

exports.errorHandler = (err, req, res, next) => {
    logger.error(err);

    const status = err.status || 500;

    if (process.env.NODE_ENV === "production") {
        return res.status(status).json({
            message: status === 500 ? "Internal Server Error" : err.message
        });
    }

    res.status(status).json({
        message: err.message,
        stack: err.stack
    });
};
