const Users = require("./Users");
const Properties = require("./Properties");
const Appointments = require("./Appointments");
const Favorites = require("./Favorites");
//Inserto el modelo.
Properties.belongsToMany(Users, { through: Favorites });
Users.belongsToMany(Properties, { through: Favorites });

Users.hasMany(Appointments, { foreignKey: "userId" });
Appointments.belongsTo(Users);
Appointments.belongsTo(Properties);
Properties.hasMany(Appointments, { foreignKey: "propertyId" });

module.exports = { Users, Properties, Appointments, Favorites };
