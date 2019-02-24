const express = require('express')
const routes = express.Router()

// Custom Middlewares
const authMiddleware = require('./app/middlewares/auth')

// Controllers
const controllers = require('./app/controllers')

// ROUTES
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)
routes.get('/test', authMiddleware, (req, res) => {
  return res.json({ ok: true })
})

module.exports = routes
