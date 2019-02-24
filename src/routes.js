const express = require('express')
const routes = express.Router()

// Custom Middlewares
const authMiddleware = require('./app/middlewares/auth')

// Controllers
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// ROUTES
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/test', authMiddleware, (req, res) => {
  return res.json({ ok: true })
})

module.exports = routes
