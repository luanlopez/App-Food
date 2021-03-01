// const env = process.env.NODE_ENV || 'development';

// const logging = env === 'development';

module.exports = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD_DECRYPTED,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  define: {
    timezone: '-03:00',
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    // logging,
  },
};
