const User = require('../models/User')

exports.create = (data) => User.create(data)
exports.findByEmail = (email) => User.findOne({ where: { email } })
