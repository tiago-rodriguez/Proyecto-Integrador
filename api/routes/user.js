const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const { generateToken } = require("../config/token");
const { validateUser, validateAdmin } = require("../middlewares/auth");

router.get("/test", (req, res) => {
  console.log("aparece el test");
  res.send("Test string");
});

//http://localhost:3001/api/users/register

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

//http://localhost:3001/api/users/login

//Uso el User para traer datos del modelo de usuario
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    console.log(email, password);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        nombre: user.nombre,
        apellido: user.apellido,
        cellPhone: user.cellPhone,
        admin: user.admin,
      };

      const token = generateToken(payload); //Devuelve un token
      //res.cookie("token", token);
      res.send([payload, token]);
    });
  });

  router.post("/me", validateUser, (req, res) => {
    res.send(req.user);
  });

  //Apartir de aca son Rutas Admin.

  //ruta para mostrar todos los usuarios siendo admin
  router.post("/allUsers", validateAdmin, (req, res) => {
    Users.findAll().then((users) => {
      console.log(users);
      res.status(200).send(users);
    });
  });

  router.delete("/delete/:id", validateAdmin, (req, res) => {
    const id = req.params.id;
    Users.destroy({ where: { id } })
      .then(() => res.status(204).send("Deleted User"))
      .catch((err) => res.status(400).send(err));
  });
});

module.exports = router;
