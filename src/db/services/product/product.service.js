const { ProductModel } = require('../../../models');

class ProductService {
  createProduct(product) {
    const productToSave = new ProductModel(product);

    return productToSave.save();
  }

  getProducts() {
    return ProductModel.find();
  }

  getProductById(id) {
    return ProductModel.findById(id).populate('category');
  }

  updateProductByParam(param, update) {
    return ProductModel.updateOne(param, update, { new: true });
  }

  deleteProductByParam(param) {
    return ProductModel.findOneAndDelete(param);
  }
}

module.exports = new ProductService();
