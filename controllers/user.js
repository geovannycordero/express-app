const makeValidation = require('@withvoid/make-validation')

const userController = {
  getAll: (req, res, next) => {
    return res.status(200).json({ success: true, message: 'get all users' })
  },

  getById: (req, res, next) => {
    const { id } = req.params
    return res.status(200).json({ success: true, message: `get user with id '${id}'` })
  },

  createUser: (req, res, next) => {
    const { id, name, email, type } = req.body

    const validation = makeValidation(types => {
      return {
        payload: req.body,
        checks: {
          name: { type: types.string, options: { empty: false } },
          email: { type: types.string, options: { empty: false } },
          type: { type: types.enum, options: { enum: 'admin support user'} },
        }
      }
    })
    if (!validation.success) {
      return res.status(400).json({ ...validation })
    }

    const userPayload = {
      id,
      name,
      email,
      type
    }

    return res.status(201).json({
      success: true,
      message: `user with id '${id}' created!`,
      data: userPayload
    })
  },

  updateUser: (req, res, next) => {
    const { id, name, email, type } = req.body
    const userPayload = {
      id,
      name,
      email,
      type
    }
    return res.status(200).json({
      success: true,
      message: `user with id '${id}' updated!`,
      data: userPayload
    })
  },

  deleteUser: (req, res, next) => {
    const { id } = req.params
    return res.status(200).json({ success: true, message: `user with id '${id}' deleted!` })
  },
}

module.exports = userController
