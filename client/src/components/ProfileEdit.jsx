import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfileEdit() {
  const { id } = useParams();

  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    cellPhone: "",
  });

  const editProfile = () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    console.log(newUser);
    console.log(id);
    axios
      .put(
        `http://localhost:3001/api/users/${id}`,
        {
          newUser,

          token,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("El usuario ha sido editado con exito", response);
        // la propiedad ha sido editada con éxito
      })
      .catch((error) => {
        console.log("Aca esta el error", error);
        // ha ocurrido un error al crear la propiedad
      });
  };

  return (
    <form className="formulario">
      <h1>Edición de datos:</h1>
      <label>
        Nombre:
        <input
          name="nombre"
          id="nombre"
          required
          type="text"
          value={newUser.nombre}
          onChange={(e) => setNewUser({ ...newUser, nombre: e.target.value })}
        />
        <p></p>
      </label>
      <p></p>
      <label>
        Descripción:
        <input
          name="description"
          id="description"
          required
          value={newUser.description}
          onChange={(e) =>
            setNewUser({ ...newUser, description: e.target.value })
          }
        />
      </label>
      <p></p>
      <label>
        Precio:
        <input
          name="price"
          id="price"
          required
          type="number"
          value={newUser.price}
          onChange={(e) => setNewUser({ ...newUser, price: e.target.value })}
        />
      </label>
      <p></p>
      <label>
        Category:
        <input
          name="category"
          id="category"
          required
          type="text"
          value={newUser.category}
          onChange={(e) => setNewUser({ ...newUser, category: e.target.value })}
        />
      </label>
      <p></p>
      <p></p>

      <label>
        Direccion:
        <input
          id="adress"
          name="adress"
          required
          type="text"
          value={newUser.adress}
          onChange={(e) => setNewUser({ ...newUser, adress: e.target.value })}
        />
      </label>

      <button type="button" class="btn btn-success" onClick={editProfile}>
        Guardar
      </button>
    </form>
  );
}

export default ProfileEdit;
