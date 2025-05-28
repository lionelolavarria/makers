const userRepo = require('../repositories/userRepository')
const { hashPassword, comparePassword, generateToken } = require('../utils/authUtils')

exports.registerUser = async ({ name, email, password }) => {
  const hashed = await hashPassword(password)
  const user = await userRepo.create({ name, email, password: hashed })
  return generateToken(user)
}

exports.loginUser = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email)
  if (!user || !await comparePassword(password, user.password)) {
    throw new Error('Invalid credentials')
  }
  return generateToken(user)
}
