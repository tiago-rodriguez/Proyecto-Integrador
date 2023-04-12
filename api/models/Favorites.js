const Sequelize = require("sequelize");
const db = require("../config/db");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    propertyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "properties",
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "favorites",
  }
);

module.exports = Favorites;
