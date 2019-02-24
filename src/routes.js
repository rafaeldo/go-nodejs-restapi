const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const handle = require('express-async-handler')

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
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

// Route Guard - Auth
routes.use(authMiddleware)
// all routes below this line will be guarded

/**
 * Ads - Routes
 */
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/**
 * Purchase - Routes
 */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

module.exports = routes
