const express = require('express')
const router = express.Router()
const propertyController = require('../controllers/property/propertyController')

router.route('/property/create').post(propertyController.createProperty)
router.route('/property/remove/:id').get(propertyController.deleteProperty)
router.route('/property/edit/:id').patch(propertyController.editPropery)
router.route('/property/update/:id').put(propertyController.updatePropery)

module.exports = router