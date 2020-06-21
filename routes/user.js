const express = require('express')
const auth = require('../middlewares/auth')
const userController = require('../controllers/user')

const router = express.Router()

router.get('/', auth.decode, userController.getAll)
router.post('/middleware-login-demo', auth.encode, (req, res) => {
  return res.status(200).json({ success: true, token: req.token })
})
router.get('/:id', userController.getById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router