const mongoose = require('mongoose');

class Database {

    static connect() {

        const urlConnection = process.env.DATABASE_URL;

        Database.connection = mongoose.connect(urlConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        return Database.connection
    }

    // static get connection() {
    // return Database.connection
    // }

}

module.exports = Database;