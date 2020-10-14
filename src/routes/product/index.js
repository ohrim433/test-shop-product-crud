const { Router } = require('express');

const { ProductController } = require('../../controllers');

const router = Router();

router.post('/new', ProductController.createProduct);

module.exports = router;
