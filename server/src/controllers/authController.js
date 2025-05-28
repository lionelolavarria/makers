const authService = require('../services/authService')

exports.register = async (req, res, next) => {
  try {
    const token = await authService.registerUser(req.body)
    res.status(201).json({ token })
  } catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body)
    res.status(200).json({ token })
  } catch (err) {
    next(err)
  }
}
