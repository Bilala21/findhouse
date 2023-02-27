const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')


router.route('/user')
    .get(verifyJWT,usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(verifyJWT,usersController.updateUser)
    .delete(verifyJWT,usersController.deleteUser)
    router.route('/single/').get(verifyJWT,usersController.getSingleUser)
module.exports = router
