// SEQUELIZE MODELS
const Sequelize = require('sequelize');
const db = require('./database') // import stuff from database

const Campus = db.define(
  'campus',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'http://www.colby.edu/visitors/wp-content/uploads/sites/8/2018/01/17-087_Campus-Map_MapOnly-011518.jpg'
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.TEXT
    }
  }
)
module.exports = Campus;
