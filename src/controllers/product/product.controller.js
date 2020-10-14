const { ProductService } = require('../../db');
const { responseStatusCodesEnum: { CREATED } } = require('../../helpers');

class ProductController {
  async createProduct(req, res, next) {
    try {
      const product = req.body;

      await ProductService.createProduct(product);

      res.sendStatus(CREATED);
    } catch (e) {
      res.end(e.message);
    }
  }
}

module.exports = new ProductController();
