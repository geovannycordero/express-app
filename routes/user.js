const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router