const { CategoryService } = require('../../db');
const {
  responseStatusCodesEnum: {
    CREATED, OK, NO_CONTENT, SERVER_ERROR,
  },
  ErrorHandler,
  errorMessagesEnum,
  messagesEnum: { DELETED, UPDATED },
} = require('../../helpers');

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const category = req.body;

      const createdCategory = await CategoryService.createCategory(category);

      return res.json(createdCategory).status(CREATED);
    } catch (e) {
      return res.end(e.message);
    }
  }

  async getCategories(req, res, next) {
    try {
      const categoriesList = await CategoryService.getCategories();

      return res.json(categoriesList).status(OK);
    } catch (e) {
      return res.end(e.message);
    }
  }

  getCategoryById(req, res, next) {
    return res.json(req.category).status(OK);
  }

  async updateCategoryById(req, res, next) {
    try {
      const { _id } = req.category;
      const categoryToUpdate = req.body;

      await CategoryService.updateCategoryByParam(
        { _id },
        categoryToUpdate,
      );

      return res.json(UPDATED).status(OK);
    } catch (e) {
      return res.end(e.message);
    }
  }

  async deleteCategoryById(req, res, next) {
    try {
      const { _id } = req.category;
      const categoryToDelete = await CategoryService.deleteCategoryByParam({ _id });

      if (!categoryToDelete) {
        return next(new ErrorHandler(SERVER_ERROR, errorMessagesEnum.SERVER_ERROR));
      }

      return res.status(NO_CONTENT).json(DELETED);
    } catch (e) {
      return res.end(e.message);
    }
  }
}

module.exports = new CategoryController();
