const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const { generateToken, validateToken } = require("../config/token");

//http://localhost:3001/api/users/register

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

module.exports = router;

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
        name: user.name,
        lastname: user.lastname,
      };

      const token = generateToken(payload); //Devuelve un token

      res.cookie("token", token);

      res.send(payload);
    });
  });

  router.get("/me", (req, res) => {
    const token = req.cookies.token;

    const { user } = validateToken(token);

    res.send(user);
  });
});
