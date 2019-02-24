const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Before Save Hook
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

// Model methods
UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

// Static methods
UserSchema.statics = {
  generateToken ({ id }) {
    const payload = {
      id
    }

    const appSecret = authConfig.secret

    const options = {
      expiresIn: authConfig.ttl
    }

    return jwt.sign(payload, appSecret, options)
  }
}

module.exports = mongoose.model('User', UserSchema)
