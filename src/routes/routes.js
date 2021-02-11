const { Router } = require('express')

const routes = new Router()

routes.get('/test', (request, response) => response.json({
  message: "Luan pilantra",
}
).status(200))

module.exports = routes
