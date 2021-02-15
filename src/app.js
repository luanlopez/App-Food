const express = require('express');
const routesLoader = require('./routes/routesLoaders');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    routesLoader.load(this.server);
  }
}

module.exports = new App().server;
