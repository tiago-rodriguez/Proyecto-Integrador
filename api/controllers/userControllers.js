const { User, Properties } = require("../models/");
const { generateToken } = require("../config/token");

//listar usuarios
const allUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.status(200).send(users);
    })
    .catch((err) => res.status(400).send(err));
};

//eliminar usuario
const deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { id } })
    .then(() => {
      res.status(204).send("User deleted");
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = { allUsers, deleteUser };
