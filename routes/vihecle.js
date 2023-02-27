const express = require('express')
const router = express.Router()
const vihecleController = require('../controllers/vihecle/vihecleController')

router.route('/vihecle/create').post(vihecleController.createVihecle)
router.route('/vihecle/bike/create').post(vihecleController.createBike)

module.exports = router