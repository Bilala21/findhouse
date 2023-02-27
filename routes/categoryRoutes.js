

const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/category')

router.route('/category').post(CategoryController.createCategory) //for category

router.route('/sub-category').post(CategoryController.createChildCategory) //for child category

router.route('/sub-type').post(CategoryController.createSubType) //for child category

router.route('*').get(function(_,res){
    return res.status(404).json({"message":"Route not found"})
})

module.exports = router



































// const express = require('express')
// const router = express.Router()
// const categoryController = require('../controllers/category/categoryController')

// router.route('/main').post(categoryController.createMainCategory)
// router.route('/sub').post(categoryController.createSubcategory)
// router.route('/').get(categoryController.getCategory)
// router.route('/:id').get(categoryController.removeCategory)
// router.route('/:id').post(categoryController.updateCategory)

// module.exports = router