const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_auth_db', 'root', '@Haithcock97', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
