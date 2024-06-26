const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_auth_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
