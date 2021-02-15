const { Router } = require('express');

const productsRoutes = require('./productsRoutes');
const ordersRoutes = require('./ordersRoutes');

class RoutesLoader {
  constructor() {
    this.router = new Router();
  }

  load(app) {
    productsRoutes(this.router);
    ordersRoutes(this.router);

    app.use(this.router);
  }
}

module.exports = new RoutesLoader();
