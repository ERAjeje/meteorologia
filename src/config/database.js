const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "username": process.env.user,
  "password": process.env.password,
  "database": process.env.database,
  "host": process.env.host,
  "port": process.env.port_db,
  "dialect": "postgres",
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  }
}
