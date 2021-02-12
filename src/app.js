const express = require('express')
const loaderRouter = require('./routes/routerLoaders')

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
    loaderRouter.load(this.server);
  }
}

module.exports = new App().server;