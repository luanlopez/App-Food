require('dotenv').config();
const app = require('./app')
const Database = require('./database/mongoDB');

const PORT = 3333;
const HOST = '0.0.0.0';

Database.connect();

app.listen(PORT, HOST, () => {
  console.log('Server is running! 🚗')
})