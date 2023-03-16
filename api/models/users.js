const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}
User.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    cellPhone: {
      type: Sequelize.STRING,
    },

    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
