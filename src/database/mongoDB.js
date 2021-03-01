const mongoose = require('mongoose');

class Database {
  static connect() {
    const urlConnection = process.env.DB_MONGO_URL;

    Database.connection = mongoose.connect(urlConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return Database.connection;
  }

  // static get connection() {
  // return Database.connection
  // }
}

module.exports = Database;
