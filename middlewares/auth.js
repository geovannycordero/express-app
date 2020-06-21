const jwt = require('jsonwebtoken')

module.exports = {
  decode: (req, res, next) => {
    if (!req.headers['authorization']) {
      return res.status(401).json({
        success: false,
        message: 'No token provided!'
      })
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if (!decoded) {
        throw new Error('Bad token!')
      }
      req.information = decoded
      return next()
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid auth token!'
      })
    }
  },
  encode: (req, res, next) => {
    const payload = {
      username: req.body.username,
      password: req.body.password
    }
    console.log(process.env.SECRET_KEY)
    const token = jwt.sign(payload, process.env.SECRET_KEY)
    req.token = token
    next()
  }
}
