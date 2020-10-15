module.exports = class ErrorHandler extends Error {
  status;
  message;

  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
};
