const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const mySqlConfig = require('../../../config/mySqlConfig');

class Database {
  constructor() {
    this.models = [];
    this.connection = new Sequelize(mySqlConfig);
    this.init();
  }

  async init() {
    fs.readdirSync(path.join(__dirname, 'models')).forEach((file) => {
      const model = require(path.join(__dirname, 'models', file));

      this.models.push(model);
    });

    await this.associate();
    this.authenticate();
  }

  async associate() {
    this.models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  authenticate() {
    this.connection
      .authenticate()
      .then((conn) =>
        console.info('Connection has been established successfully.')
      )
      .catch((err) => {
        console.log('Unable to connect to the database mysql :', err);
        // throw new Error(`Unable to connect to the database mysql'`);
      });
  }
}

module.exports = new Database();

// console.log(fs.readdirSync(path.join(__dirname, 'models')));
