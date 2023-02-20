const Sequelize = require("sequelize");
const db = require("../config/db");

class Properties extends Sequelize.Model {}

Properties.init(
  {
    nombre_del_propietario: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    owner_contact: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: Sequelize.INTEGER,
    },
    enviroments: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },

    image: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },

    locate: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    meters: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "properties",
  }
);

module.exports = Properties;
