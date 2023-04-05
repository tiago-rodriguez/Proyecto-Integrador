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

//Este código crea un nuevo usuario en una base de datos un POST a la ruta "/register" en el servidor.

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

//http://localhost:3001/api/users/login
/*//Esta ruta permite a un usuario autenticarse en el sistema proporcionando su correo electrónico
 y contraseña en respuesta a una solicitud POST. Si la autenticación tiene 
 éxito, la ruta devuelve un token JWT y una carga útil de información del usuario. Si 
 la autenticación falla, la ruta devuelve un código de estado 401 (No autorizado).
 */
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
        id: user.id,
      };

      const token = generateToken(payload); //Devuelve un token
      res.send([payload, token]);
    });
  });

  //BUSCA AL USUARIO POR EL ID
  //http://localhost:3001/api/users/:id

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    Users.findOne({ where: { id } }).then((user) => {
      res.status(200).send(user);
    });
  });

  /*validateUser verifica si el usuario que realiza la solicitud está autenticado.
  Esta ruta permite a un usuario autenticado obtener su propio objeto user en respuesta a una solicitud POST.*/

  router.post("/me", validateUser, (req, res) => {
    res.send(req.user);
  });

  //Apartir de aca son Rutas Admin.

  //Probar con params
  //ruta para mostrar todos los usuarios siendo admin
  router.post("/getAllUsers", (req, res) => {
    Users.findAll().then((user) => {
      console.log(user);
      res.status(200).send(user);
    });
  });

  //EDITA AL USUARIO
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.body.userUpdate);
    Users.findByPk(id)
      .then((user) => user.update(req.body.userUpdate))
      .then((userUpdated) => res.status(201).send(userUpdated))

      .catch((err) => res.status(400).send(err));
  });

  /*Esta ruta identificara al usuario por id para luego eliminarlo de la DB,
   La función llama al método destroy pasando un objeto que indica que se debe eliminar el usuario con el ID coincidente
   */
  router.delete("/:id", validateAdmin, (req, res) => {
    const id = req.params.id;
    Users.destroy({ where: { id } })
      .then(() => res.status(204).send("Deleted User"))
      .catch((err) => res.status(400).send(err));
  });
});

module.exports = router;
