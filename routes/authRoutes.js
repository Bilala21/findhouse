const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth/authController')
const loginLimiter = require('../middleware/loginLimiter')

router.route('/user/login')
    .post(authController.login)

router.route('/refresh')
    .get(authController.refresh)

router.route('/user/logout')
    .post(authController.logout)

module.exports = router