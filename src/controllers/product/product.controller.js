const { ProductService } = require('../../db');
const {
  responseStatusCodesEnum: {
    CREATED, OK, NO_CONTENT, SERVER_ERROR,
  },
  ErrorHandler,
  errorMessagesEnum,
  messagesEnum: { DELETED, UPDATED },
} = require('../../helpers');

class ProductController {
  async createProduct(req, res, next) {
    try {
      const product = req.body;

      const createdProduct = await ProductService.createProduct(product);

      return res.json(createdProduct).status(CREATED);
    } catch (e) {
      return res.end(e.message);
    }
  }

  async getProducts(req, res, next) {
    try {
      const productsList = await ProductService.getProducts();

      return res.json(productsList).sendStatus(OK);
    } catch (e) {
      return res.end(e.message);
    }
  }

  getProductById(req, res, next) {
    return res.json(req.product).status(OK);
  }

  async updateProductById(req, res, next) {
    try {
      const { _id } = req.product;
      const productToUpdate = req.body;

      await ProductService.updateProductByParam(
        { _id },
        productToUpdate,
      );

      return res.json(UPDATED).status(OK);
    } catch (e) {
      return res.end(e.message);
    }
  }

  async deleteProductById(req, res, next) {
    try {
      const { _id } = req.product;
      const productToDelete = await ProductService.deleteProductByParam({ _id });

      if (!productToDelete) {
        return next(new ErrorHandler(SERVER_ERROR, errorMessagesEnum.SERVER_ERROR));
      }

      return res.json(DELETED).status(NO_CONTENT);
    } catch (e) {
      return res.end(e.message);
    }
  }
}

module.exports = new ProductController();
