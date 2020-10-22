const Sequelize = require('sequelize');
const connection = new Sequelize('guia_press', 'root', '59108240', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;