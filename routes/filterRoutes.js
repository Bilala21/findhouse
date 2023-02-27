

const express = require('express')
const router = express.Router()

const FilterController = require('../controllers/FilterController')

router.route('/product-filter/:slug').post(FilterController.productFilter) //for category

router.route('*').get(function(_,res){
    return res.status(404).json({"message":"Route not found"})
})

module.exports = router