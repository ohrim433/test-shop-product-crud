const { ProductModel } = require('../../../models');

class ProductService {
  createProduct(product) {
    const productToSave = new ProductModel(product);

    return productToSave.save();
  }
}

module.exports = new ProductService();
