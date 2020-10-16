const { Router } = require('express');

const { CategoryController } = require('../../controllers');
const { isCategoryExistsMiddleware } = require('../../middlewares');

const router = Router();

router.get('/', CategoryController.getCategories);
router.post('/', CategoryController.createCategory);
router.use('/:id', isCategoryExistsMiddleware);
router.get('/:id', CategoryController.getCategoryById);
router.delete('/:id', CategoryController.deleteCategoryById);
router.put('/:id', CategoryController.updateCategoryById);

module.exports = router;
