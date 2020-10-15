const { Router } = require('express');

const { ProductController } = require('../../controllers');
const { isNewProductValidMiddleware } = require('../../middlewares');

const router = Router();

router.post('/new', isNewProductValidMiddleware, ProductController.createProduct);

module.exports = router;
