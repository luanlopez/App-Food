require('dotenv').config();
// require('./modules/db-modules/mysql');

const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running! 🚗');
});
