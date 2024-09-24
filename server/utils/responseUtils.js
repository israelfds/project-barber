exports.sendError = (res, statusCode, message) => {
    res.status(statusCode).json({ error: message });
};

exports.sendSuccess = (res, data) => {
    res.json(data);
};
