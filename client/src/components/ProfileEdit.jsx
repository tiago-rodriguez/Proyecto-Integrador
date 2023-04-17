import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Nav, Placeholder } from "react-bootstrap";
import { message } from "antd";
import { Form } from "react-bootstrap";
import "../styles/form.css";
import { useSelector } from "react-redux";

function ProfileEdit() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    cellPhone: "",
    email: "",
  });

  const handleInput = (e) => {
    //Cuando escribo en el input genero un evento.
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value }); //Hago un copypaste del form pero modificare cierto elemento.
    setErrors({ ...errors, [name]: "" }); // Limpiar el mensaje de error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    console.log(newUser);
    const newErrors = {};
    if (!newUser.nombre) {
      newErrors.nombre = "Debe ingresar un nombre";
    } else if (newUser.nombre.length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
    } else if (!/^[a-zA-Z\s]+$/.test(newUser.nombre)) {
      newErrors.nombre = "El nombre solo puede contener letras y espacios";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(newUser.nombre)) {
      newErrors.nombre = "El nombre debe comenzar con mayúscula";
    }
    if (!newUser.apellido) {
      newErrors.apellido = "Debe ingresar un apellido";
    } else if (newUser.apellido.length < 3) {
      newErrors.apellido = "El apellido debe tener al menos 3 caracteres";
    } else if (!/^[a-zA-Z\s]+$/.test(newUser.apellido)) {
      newErrors.apellido = "El apellido solo puede contener letras y espacios";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(newUser.apellido)) {
      newErrors.apellido = "El apellido debe comenzar con mayúscula";
    }
    if (newUser.cellPhone && newUser.cellPhone.length > 10) {
      alert("El número de teléfono debe tener máximo 10 caracteres.");
      return;
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .put(
          `http://localhost:3001/api/users/${id}`,

          {
            newUser,

            token,
          }
        )
        .then((response) => {
          if (response.status === 201) {
            // La propiedad se creó correctamente
            console.log("El usuario ha sido editado", response);
          }
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
    }
  };
  return (
    <>
      {contextHolder}

      <h1 className="text">Edición de datos:</h1>
      <h6 className="text">Puedes poner tus mismos datos de antes</h6>
      <form className="formulario" onSubmit={handleSubmit}>
        <Form.Group className="form-group-custom" controlId="nombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            required
            maxLength={20}
            placeholder={user.nombre}
            value={newUser.nombre}
            onChange={handleInput}
          />
        </Form.Group>
        {errors.nombre && <span className="error">{errors.nombre}</span>}

        <br></br>

        <Form.Group className="form-group-custom" controlId="apellido">
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            name="apellido"
            type="area"
            required
            maxLength={20}
            placeholder={user.apellido}
            value={newUser.apellido}
            onChange={handleInput}
          />
        </Form.Group>
        {errors.apellido && <span className="error">{errors.apellido}</span>}
        <br></br>
        <br></br>
        <Form.Group className="form-group-custom" controlId="cellPhone">
          <Form.Label>Celular:</Form.Label>
          <Form.Control
            name="cellPhone"
            type="number"
            required
            placeholder={user.cellPhone}
            maxLength={10}
            value={newUser.cellPhone}
            onChange={handleInput}
          />
        </Form.Group>
        <br></br>
        <Form.Group className="form-group-custom" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            maxLength={20}
            placeholder={user.email}
            value={newUser.email}
            onChange={handleInput}
          />
        </Form.Group>
        <br></br>
        <button type="submit" class="btn btn-success">
          Guardar
        </button>
      </form>
      <Nav>
        <Nav.Link href="/profile">
          <button type="button" class="btn btn-primary">
            Volver
          </button>
        </Nav.Link>
      </Nav>
    </>
  );
}

export default ProfileEdit;
