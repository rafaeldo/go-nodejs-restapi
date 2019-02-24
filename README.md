# Node.js REST API
Node.js REST API with:

 - JWT Authentication ( [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) )
 - Mail Service ( [nodemailer](https://github.com/nodemailer/nodemailer) )
 - Queue jobs ( [kue](https://github.com/Automattic/kue), Redis)
 - Validation  ( [joi](https://github.com/hapijs/joi) )
 - MongoDB  ( [mongoose](https://github.com/Automattic/mongoose) )
 - Error reporting (dev-mode) ( [youch](https://github.com/poppinss/youch) )
 - Error tracking (production-mode) ( [sentry](https://github.com/getsentry/sentry-javascript) )

## Getting Started
1) Clone the repository.
2) You will need Mongo installed in your machine or a docker container (`mongo` image recommended).
3) You will need Redis installed in your machine or a docker container (`redis:alpine` image recommended).
4) Setup the environment variables (dotenv). Rename file `.env-example` to just `.env` and fill in the variables. 
**Remember to change `NODE_ENV` to `production` if you host it online.*
**You will need a [sentry.io](https://sentry.io) account for Error tracking.*
5) In root folder run `npm install`.
6) In root folder run `npm start`.
