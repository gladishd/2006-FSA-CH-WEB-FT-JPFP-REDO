const Sequelize = require('sequelize');
const db = require('./database')

const Student = db.define(
  'student',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://www.irvingisd.net/cms/lib/TX01917973/Centricity/Domain/6667/StudentPageIcons_Artboard%205%20copy%204.png'
    },
    gpa: {
      type: Sequelize.FLOAT,
      validate: {
        min: 0.0,
        max: 4.0
      }
    }
  }
);

module.exports = Student;
