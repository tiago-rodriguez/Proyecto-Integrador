const Sequelize = require("sequelize");
const db = require("../db/config");

class Reviews extends Sequelize.Model {}

Reviews.init(
  {
    rating: {
      type: Sequelize.INTEGER,
    },
    comments: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "reviews",
  }
);

module.exports = Reviews;
