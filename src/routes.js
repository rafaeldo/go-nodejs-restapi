const express = require('express')
const routes = express.Router()

// Controllers
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// ROUTES
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
