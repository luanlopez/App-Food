const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

require('dotenv').config();

const logging = env == 'development';
