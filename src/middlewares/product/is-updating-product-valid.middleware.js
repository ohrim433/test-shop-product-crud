const {
  ErrorHandler,
  updateProductValidationSchema,
  responseStatusCodesEnum: { BAD_REQUEST },
  errorMessagesEnum: { NO_UPDATE_DATA },
} = require('../../helpers');

module.exports = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      return next(new ErrorHandler(BAD_REQUEST, NO_UPDATE_DATA.message));
    }

    const { error } = updateProductValidationSchema.validate(req.body);

    if (error) {
      return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
  } catch (e) {
    next(e);
  }
};
