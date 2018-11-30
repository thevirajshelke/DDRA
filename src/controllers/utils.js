function formatResponse(status_p, message_p, data_p, error_p) {
    return {
        status: status_p,
        message: message_p,
        data: data_p,
        error: error_p
    };
}

module.exports = {
    formatResponse
};