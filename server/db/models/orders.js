const Sequelize = require('sequelize');
const db = require('../db');

const OrderLine = db.define('orders', {
  itemPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  itemQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  shipPlanet: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = OrderLine;