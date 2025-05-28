const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.hashPassword = (pass) => bcrypt.hash(pass, 10)
exports.comparePassword = (pass, hash) => bcrypt.compare(pass, hash)
exports.generateToken = (user) =>
  jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' })
