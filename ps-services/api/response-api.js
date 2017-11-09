class ResponseAPI {
  handleErrorResponse(response, message) {
    response.json({
      type: 'fault',
      message
    });
  }

  handleSuccessResponse(response, message, body) {
    response.json({
      type: 'success',
      message,
      body
    });
  }

  getErrorData(message) {
    return {
      type: 'fault',
      message
    };
  }
}

module.exports = new ResponseAPI();