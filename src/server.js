require('dotenv').config();
const app = require('./app');
const Database = require('./database/mongoDB');

const PORT = 3000;

Database.connect();

app.listen(PORT, () => {
  console.log('Server is running! 🚗');
});
