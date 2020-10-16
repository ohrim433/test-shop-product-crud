const { CategoryModel } = require('../../../models');

class CategoryService {
  createCategory(category) {
    const categoryToSave = new CategoryModel(category);

    return categoryToSave.save();
  }

  getCategories() {
    return CategoryModel.find();
  }

  getCategoryById(id) {
    return CategoryModel.findById(id);
  }

  updateCategoryByParam(param, update) {
    return CategoryModel.updateOne(param, update, { new: true });
  }

  deleteCategoryByParam(param) {
    return CategoryModel.findOneAndDelete(param);
  }
}

module.exports = new CategoryService();
