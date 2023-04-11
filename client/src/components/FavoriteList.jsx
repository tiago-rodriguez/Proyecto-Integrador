import React, { useState } from "react";

function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  function handleAddFavorite(property) {
    setFavorites([...favorites, property]);
  }

  return (
    <div>
      <h1>Lista de Favoritos</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <h2>{favorite.title}</h2>
            <p>{favorite.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
