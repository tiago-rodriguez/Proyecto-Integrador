const Sequelize = require("sequelize");
const db = require("../config/db");

class Properties extends Sequelize.Model {}

Properties.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    operation: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    adress: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    rooms: {
      type: Sequelize.STRING,
    },

    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bathrooms: {
      type: Sequelize.STRING,
    },
    enviroments: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    available: {
      type: Sequelize.BOOLEAN,
    },

    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    image: {
      type: Sequelize.TEXT,
    },

    image_2: {
      type: Sequelize.TEXT,
    },

    image_3: {
      type: Sequelize.TEXT,
    },

    image_4: {
      type: Sequelize.TEXT,
    },

    image_5: {
      type: Sequelize.TEXT,
    },

    image_6: {
      type: Sequelize.TEXT,
    },

    locate: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    meters: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "properties",
  }
);

module.exports = Properties;
