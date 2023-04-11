const Sequelize = require("sequelize");
const db = require("../config/db");

class Appointments extends Sequelize.Model {}

Appointments.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    propertyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "appointment",
  }
);

module.exports = Appointments;
