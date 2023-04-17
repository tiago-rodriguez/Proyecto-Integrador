const express = require("express");
const router = express.Router();
const Favorites = require("../models/Favorites");
const { validateUser } = require("../middlewares/auth");

//TRAE TODOS LOS FAVORITOS
//http://localhost:3001/api/favorites/getAllFavorites

router.post("/getAllFavorites", (req, res) => {
  const { id } = req.body;
  Favorites.findAll({ where: { userId: id } }).then((favorite) => {
    res.status(200).send(favorite);
  });
});

//AGREGAR A FAVORITOS
//http://localhost:3001/api/favorites/addFavorites
//Se extrae el ID del usuario de req.user.id y el ID de la propiedad de req.body.idProperty.
//Finalmente, se crea un nuevo registro en la tabla Favorites, con el ID del usuario y el ID de la propiedad.

router.post("/addFavorites", validateUser, (req, res) => {
  //Id del user
  const { id } = req.user;
  const { idProperty } = req.body;
  console.log(idProperty);
  Favorites.create({ userId: id, propertyId: idProperty })
    .then((favorite) => res.send(favorite))
    .catch((error) => console.log(error));
});

//ELIMINAR DE FAVORITOS
//http://localhost:3001/api/favorites/deleteFavorites/:id

router.delete("/deleteFavorites/:id", (req, res) => {
  const favoriteId = req.params.id;
  Favorites.destroy({
    where: {
      id: favoriteId,
    },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        return res.status(404).send({ message: "El favorito no existe" });
      }
      return res.send({ message: "Favorito eliminado exitosamente" });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send({ message: "Error al eliminar el favorito" });
    });
});

module.exports = router;
