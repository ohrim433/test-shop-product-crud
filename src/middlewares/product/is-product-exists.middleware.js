const { ProductService } = require('../../db');
const { ErrorHandler, errorMessagesEnum: { RECORD_NOT_FOUND }, responseStatusCodesEnum } = require('../../helpers');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductService.getProductById(id);

  if (!product) {
    return next(new ErrorHandler(responseStatusCodesEnum.NOT_FOUND, RECORD_NOT_FOUND.message));
  }

  req.product = product;
  next();
};
