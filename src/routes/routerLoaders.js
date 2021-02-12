const {
    Router
} = require('express');

const productsRoute = require('./productsRoutes')


class RouterLoader {
    constructor() {
        this.router = new Router();
    }

    load(app) {

        productsRoute(this.router)

        app.use(this.router)
    }

}

module.exports = new RouterLoader();