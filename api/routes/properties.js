const express = require("express");
const router = express.Router();
const Properties = require("../models/Properties");
const { validateAdmin } = require("../middlewares/auth");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

//http://localhost:3001/api/properties/create

router.post("/create", validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

//http://localhost:3001/api/properties/:id

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Properties.findOne({ where: { id } }).then((property) => {
    res.status(200).send(property);
  });
});

//BUSCADOR
//http://localhost:3001/api/properties/search/:title

router.get("/search/:title", (req, res) => {
  const { title } = req.params;
  const lower = title.toLowerCase();
  Properties.findAll({
    where: {
      title: { [Op.iLike]: `%${lower}%` },
    },
  }).then((search) => {
    res.send(search);
  });
});

//FILTRO POR AMBIENTES
//http://localhost:3001/api/properties/filter/:environments

router.get("/environments/:environments", (req, res) => {
  const { environments } = req.params;
  Properties.findAll({ where: { environments: environments } })
    .then((filter) => {
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

//FILTRO POR PRECIO
//http://localhost:3001/api/properties/price

router.post("/price", (req, res) => {
  const { minimo, maximo } = req.body;
  Properties.findAll({ where: { price: { [Op.between]: [minimo, maximo] } } })
    .then((filter) => {
      console.log(filter);
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

router.post("/getAllProperties", (req, res) => {
  Properties.findAll().then((property) => {
    console.log(property);
    res.status(200).send(property);
  });
});

module.exports = router;
