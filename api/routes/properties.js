const express = require("express");
const router = express.Router();
const Properties = require("../models/Properties");
const { validateAdmin, validateUser } = require("../middlewares/auth");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

//http://localhost:3001/api/properties/all

router.get("/all", (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
});

//BUSCA A LA PROPIEDAD POR EL ID
//http://localhost:3001/api/properties/:id

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Properties.findOne({ where: { id } }).then((property) => {
    res.status(200).send(property);
  });
});

//CREA UNA PROPIEDAD
//http://localhost:3001/api/properties/create

router.post("/create", validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

//EDITA UNA PROPIEDAD
//http://localhost:3001/api/properties/change/:id

router.put("/change/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

//BORRA LA PROPIEDAD
//http://localhost:3001/api/properties/:id
router.delete("/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
    .then(() => res.status(204).send("Propiedad eliminada"))
    .catch((err) => res.status(400).send(err));
});

//BUSCADOR
//http://localhost:3001/api/properties/search/:title

router.post("/search", (req, res) => {
  const { search } = req.body;
  const lower = search.toLowerCase();
  Properties.findAll({
    where: {
      //adress: { [Op.iLike]: `%${lower}%` },
      title: { [Op.iLike]: `%${lower}%` },
    },
  }).then((searched) => {
    res.send(searched);
  });
});

//FILTRO POR AMBIENTES
//http://localhost:3001/api/properties/enviroments/:environments

router.get("/enviroments/:enviroments", (req, res) => {
  const enviroments = req.params.enviroments;
  Properties.findAll({ where: { enviroments: enviroments } })
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

//OBTIENE TODAS LAS PROPIEDADES
//http://localhost:3001/api/properties/getAllProperties

router.post("/getAllProperties", (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
});

//AGREGAR A FAVORITOS
//http://localhost:3001/api/properties/addFavorites

router.post("/addFavorites", validateUser, (req, res) => {
  const { id } = req.body;
  Properties.findByPk(id)
    .then((property) => {
      property.setUsers(req.user.id);
      res.status(201).send(property);
    })
    .catch((error) => console.log(error));
});

//ELIMINAR DE FAVORITOS
//http://localhost:3001/api/properties/deleteFavorites/:id

router.post("/deleteFavorites/:id", validateUser, (req, res) => {
  const { id } = req.params;
  Properties.findByPk(id)
    .then((property) => {
      property.removeUsers(req.user.id);
      res.status(204).send(property);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
