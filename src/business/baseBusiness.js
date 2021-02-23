const mongoDb = require('../database/mongoDB');

class BaseBusiness {
  constructor() {
    this.mongodb = mongoDb.connect();
  }
}

module.exports = BaseBusiness;
