import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { message } from "antd";

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
      });

    messageApi
      .open({
        type: "success",
        content: "Los cambios se veran reflejados cuando cierres sesión",
      })

      .catch((error) => {
        console.log("Aca esta el error", error);
        // ha ocurrido un error al crear la propiedad
      });
  };

  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}

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
          Apellido:
          <input
            name="apellido"
            id="apellido"
            required
            value={newUser.apellido}
            onChange={(e) =>
              setNewUser({ ...newUser, apellido: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Celular:
          <input
            name="cellPhone"
            id="cellPhone"
            required
            type="tel"
            value={newUser.cellPhone}
            onChange={(e) =>
              setNewUser({ ...newUser, cellPhone: e.target.value })
            }
          />
        </label>
        <p></p>

        <button type="button" class="btn btn-success" onClick={editProfile}>
          Guardar
        </button>

        <Nav>
          <Nav.Link href="/profile">
            <button type="button" class="btn btn-primary" onClick={editProfile}>
              Volver
            </button>
          </Nav.Link>
        </Nav>
      </form>
    </>
  );
}

export default ProfileEdit;
