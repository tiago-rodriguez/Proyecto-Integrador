const express = require("express");
const router = express.Router();
const Favorites = require("../models/Favorites");
const { validateUser } = require("../middlewares/auth");

//TRAE TODOS LOS FAVORITOS
//http://localhost:3001/api/favorites/getAllFavorites

router.post("/getAllFavorites", (req, res) => {
  const { id } = req.user;
  Favorites.findAll({ where: { userId: id } }).then((favorite) => {
    res.status(200).send(favorite);
  });
});

//AGREGAR A FAVORITOS
//http://localhost:3001/api/favorites/addFavorites

router.post("/addFavorites", validateUser, (req, res) => {
  const { id } = req.user;
  const { idProperty } = req.body;
  console.log(idProperty);
  Favorites.create({ userId: id, propertyId: idProperty })
    .then((favorite) => res.send(favorite))
    .catch((error) => console.log(error));
});

//ELIMINAR DE FAVORITOS
//http://localhost:3001/api/favorites/deleteFavorites/:id

router.post("/deleteFavorites/:id", validateUser, (req, res) => {
  const id = req.params.id;
  Favorites.destroy({ where: { id } })
    .then((property) => {
      property.removeUsers(req.user.id);
      res.status(204).send(property);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
