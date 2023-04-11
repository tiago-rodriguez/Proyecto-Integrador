const Users = require("./users");
const Properties = require("./Properties");
const Appointments = require("./Appointments");

Properties.belongsToMany(Users, { through: "favorites" });
Users.belongsToMany(Properties, { through: "favorites" });

Users.hasMany(Appointments, { foreignKey: "userId" });
Appointments.belongsTo(Users);
Appointments.belongsTo(Properties);
Properties.hasMany(Appointments, { foreignKey: "propertyId" });

module.exports = { Users, Properties };
