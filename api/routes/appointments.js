const express = require("express");
const router = express.Router();
const Appointments = require("../models/Appointments");
const { validateUser } = require("../middlewares/auth");

//http://localhost:3001/api/appointments/new/:idProperty

router.post("/new/:idProperty", validateUser, (req, res) => {
  const { id } = req.user;
  const { idProperty } = req.params;
  const { date } = req.body;
  Appointments.create({ userId: id, propertyId: idProperty, date: date })
    .then((date) => res.send(date))
    .catch((error) => console.log(error));
});

//OBTIENE TODAS LAS CITAS
//http://localhost:3001/api/appointments/getAllAppointments
router.post("/getAllAppointments", (req, res) => {
  Appointments.findAll().then((appointment) => {
    res.status(200).send(appointment);
  });
});

module.exports = router;
