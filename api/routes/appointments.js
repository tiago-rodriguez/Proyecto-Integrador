const express = require("express");
const router = express.Router();
const Appointments = require("../models/Appointments");
const { validateUser } = require("../middlewares/auth");

//CREA CITAS
//http://localhost:3001/api/appointments/new/:idProperty

//Crea citas , si el usuario está autenticado, el middleware
//agrega los detalles del usuario a la solicitud en la propiedad req.user. Es decir extrae el id del user y de la propiedad
//Luego, se extrae la fecha de la cita del cuerpo de la solicitud utilizando req.body.date.
//Y por ultimo se crea un nuevo registro en la tabla appointments.
router.post("/new/:idProperty", validateUser, (req, res) => {
  const { id } = req.user;
  const { idProperty } = req.params;
  const { date } = req.body;
  Appointments.create({ userId: id, propertyId: idProperty, date: date })
    .then((date) => res.send(date))
    .catch((error) => console.log(error));
});

//OBTIENE LA CITA POR EL ID
//http://localhost:3001/api/appointments/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Appointments.findOne({ where: { id } }).then((appointment) => {
    res.status(200).send(appointment);
  });
});

//OBTIENE TODAS LAS CITAS
//http://localhost:3001/api/appointments/getAllAppointments
router.post("/getAllAppointments", (req, res) => {
  Appointments.findAll().then((appointment) => {
    res.status(200).send(appointment);
  });
});

module.exports = router;
