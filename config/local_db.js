const Sequelize = require('sequelize');
//远程 jeffery0712
//本地 123456
const sequelize = new Sequelize('monitor_db', 'root', 'jeffery0712', {
  host: '101.132.96.139',
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    supportBigNumbers: true,
    bigNumberStrings: true
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' //东八时区
});

module.exports = {
  sequelize
}