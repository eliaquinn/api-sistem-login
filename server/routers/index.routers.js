const express = require('express')
const userController = require('../controllers/authController')
const protect = require('../middleware/auth')

const router = express.Router()

router.route('/register').post(userController.create)
router.route('/login').post(userController.login)
router.route('/:id').put(protect, userController.update)

module.exports = router;