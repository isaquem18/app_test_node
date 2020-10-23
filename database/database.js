const Sequelize = require('sequelize');
const connection = new Sequelize('data_name', 'root', '000000000', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
