const Users = require("./users");
const Properties = require("./Properties");
const Reviews = require("./Reviews");

Properties.belongsToMany(Users, { through: "favorites" });
Users.belongsToMany(Properties, { through: "favorites" });

module.exports = { Users, Properties, Reviews };
