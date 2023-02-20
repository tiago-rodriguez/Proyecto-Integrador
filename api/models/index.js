const Users = require("./users");
const Properties = require("./Properties");
const Reviews = require("./Reviews");
const Appointments = require("./Appointments");

Properties.belongsToMany(Users, { through: Reviews });
Users.belongsToMany(Properties, { through: Reviews });

module.exports = { Users, Properties, Reviews };
