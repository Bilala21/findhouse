const express = require('express')
const router = express.Router()

const PropertyController = require('../controllers/property')

router.route('/product').post(PropertyController.createProperty)

router.route('*').get(function(_,res){
    return res.status(404).json({"message":"Route not found"})
})
module.exports = router