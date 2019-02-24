const express = require('express')
const routes = express.Router()
const validate = require('express-validation')

// Custom Middlewares
const authMiddleware = require('./app/middlewares/auth')

// Controllers
const controllers = require('./app/controllers')

// Validators
const validators = require('./app/validators')

// ROUTES
routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

// Route Guard - Auth
routes.use(authMiddleware)
// all routes below this line will be guarded

/**
 * Ads - Routes
 */
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Purchase - Routes
 */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
