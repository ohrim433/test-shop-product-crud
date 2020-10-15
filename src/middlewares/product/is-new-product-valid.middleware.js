const { ErrorHandler, newProductValidationSchema, responseStatusCodesEnum } = require('../../helpers');

module.exports = (req, res, next) => {
  try {
    const { error } = newProductValidationSchema.validate(req.body);

    if (error) {
      return next(new ErrorHandler(responseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }

    next();
  } catch (e) {
    next(e);
  }
};
