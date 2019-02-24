const express = require('express')
const routes = express.Router()

// Custom Middlewares
const authMiddleware = require('./app/middlewares/auth')

// Controllers
const controllers = require('./app/controllers')

// ROUTES
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

// Route Guard - Auth
routes.use(authMiddleware)
// all routes below this line will be guarded

/**
 * Ads - Routes
 */
routes.post('/ads', controllers.AdController.store)
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Purchase - Routes
 */
routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes
