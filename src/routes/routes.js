const {
  Router,
  request
} = require('express')

const routes = new Router()

routes.get('/test', (request, response) => response.json({
  message: "Luan pilantra",
}).status(200));


//ROTAS RE USUÁRIO
routes.get('/users');
routes.post('/users');
routes.patch('/users/:user_id');
routes.get('/users/:user_id');
routes.delete('/users/:user_id');

module.exports = routes