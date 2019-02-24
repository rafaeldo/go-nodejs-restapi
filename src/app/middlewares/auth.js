const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  // Removes 'Bearer' string and gets Token only
  const [, token] = authHeader.split(' ')

  // Secret
  const { secret } = authConfig

  try {
    // Obs: jwt package does not work with Promises by default
    // Should use Promisify to transform in a promise
    const decodedPayload = await promisify(jwt.verify)(token, secret)

    // Adds the UserID in the Request object
    req.userId = decodedPayload.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
