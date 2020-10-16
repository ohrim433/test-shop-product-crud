const { CategoryService } = require('../../db');
const { ErrorHandler, errorMessagesEnum: { RECORD_NOT_FOUND }, responseStatusCodesEnum } = require('../../helpers');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await CategoryService.getCategoryById(id);

    if (!category) {
      return next(new ErrorHandler(responseStatusCodesEnum.NOT_FOUND, RECORD_NOT_FOUND.message));
    }

    req.category = category;
    next();
  } catch (e) {
    res.end(e.message);
  }
};
