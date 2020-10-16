const { Router } = require('express');

const { ProductController } = require('../../controllers');
const {
  isNewProductValidMiddleware,
  isProductExistsMiddleware,
  isUpdatingProductValidMiddleware,
} = require('../../middlewares');

const router = Router();

router.get('/', ProductController.getProducts);
router.post('/', isNewProductValidMiddleware, ProductController.createProduct);
router.use('/:id', isProductExistsMiddleware);
router.get('/:id', ProductController.getProductById);
router.delete('/:id', ProductController.deleteProductById);
router.put('/:id', isUpdatingProductValidMiddleware, ProductController.updateProductById);

module.exports = router;
