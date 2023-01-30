const Sequelize = require("sequelize");

const db = new Sequelize("house_of_dev", "postgres", "asdxd123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
