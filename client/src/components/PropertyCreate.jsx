import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/form.css";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { message } from "antd";

function UpdateProperty() {
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [newProperty, setNewProperty] = useState({
    title: "",
    description: "",
    adress: "",
    category: "",
    city: "",
    image: "",
    locate: "",
    country: "",
    operation: "",
    enviroments: 0,
    bathrooms: 0,
    meters: "",
    rooms: 0,
    price: 0,
  });

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  const success = () => {
    messageApi.open({
      type: "success",
      content: "La Propiedad ha sido creada",
    });
  };

  const handleInput = (e) => {
    //Cuando escribo en el input genero un evento.
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value }); //Hago un copypaste del form pero modificare cierto elemento.
    setErrors({ ...errors, [name]: "" }); // Limpiar el mensaje de error
  };

  const handleSubmit = (e) => {
    success();
    e.preventDefault();

    const token = window.localStorage.getItem("token");
    console.log(newProperty);

    const formData = new FormData();
    formData.append("image", image);

    const newErrors = {};
    if (!newProperty.title) {
      newErrors.title = "Debe ingresar un título";
    } else if (newProperty.title.length < 5) {
      newErrors.title = "El título debe tener al menos 5 caracteres";
    } else if (newProperty.title.length > 50) {
      newErrors.title = "El título debe tener como máximo 50 caracteres";
    } else if (!/^[a-zA-Z\s]+$/.test(newProperty.title)) {
      newErrors.title = "El título solo puede contener letras y espacios";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(newProperty.title)) {
      newErrors.title =
        "El título debe comenzar con mayúscula la primera letra de cada palabra";
    }

    // if (!newProperty.category) {
    //   newErrors.category = "Debe seleccionar una categoría";
    // } else if (
    //   newProperty.category !== "Casa" &&
    //   newProperty.category !== "Departamento"
    // ) {
    //   newErrors.category = "La categoría no es válida";
    // }

    // if (newProperty.description.length < 5) {
    //   newErrors.description = "El título debe tener al menos 5 caracteres";
    // } else if (newProperty.description.length > 50) {
    //   newErrors.description = "El título debe tener como máximo 50 caracteres";
    // } else if (!/^[A-Z][a-zA-Z\s]*$/.test(newProperty.title)) {
    //   newErrors.title =
    //     "El título debe comenzar con mayúscula la primera letra de cada palabra";
    // }

    // if (!newProperty.operation) {
    //   newErrors.operation = "Debe seleccionar una operación";
    // } else if (
    //   newProperty.operation !== "Venta" &&
    //   newProperty.operation !== "Alquiler"
    // ) {
    //   newErrors.operation = "La operación no es válida";
    // }

    // if (!newProperty.enviroments) {
    //   newErrors.enviroments = "Debe seleccionar algún valor";
    // }

    // if (!newProperty.bathrooms) {
    //   newErrors.bathrooms = "Debe seleccionar algún valor";
    // }

    // Validar los demás campos del formulario
    // ...
    // Actualizar los mensajes de error
    setErrors(newErrors);
    // Si no hay errores, enviar el formulario
    if (Object.keys(newErrors).length === 0) {
      // Enviar el formulario
      axios
        .post(
          "http://localhost:3001/api/properties/create",
          // formData.then((res) => {
          //   console.log(res);
          // }),
          {
            newProperty,

            token,
          }
        )
        .then((response) => {
          if (response.status === 201) {
            // La propiedad se creó correctamente
            console.log("la propiedad ha sido creada", response);
          }
        });
      messageApi
        .open({
          // type: "success",
          // content: "La propiedad ha sido creada",
        })
        .catch((error) => {
          // Hubo un error al enviar la solicitud
          console.log("Aca esta el error", error);
        });
    }
  };

  return (
    <>
      {contextHolder}
      <div>
        <h1 className="text">Crea tu propiedad!!</h1>
        <div className="d-flex justify-content-center">
          <form className="formulario" onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Titulo:</Form.Label>
              <Form.Control
                name="title"
                type="text"
                required
                maxLength={100}
                value={newProperty.title}
                onChange={handleInput}
              />
            </Form.Group>
            {errors.title && <span className="error">{errors.title}</span>}
            <br></br>
            <Form.Group controlId="description">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                required
                maxLength={100}
                value={newProperty.description}
                onChange={handleInput}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="adress">
              <Form.Label>Direccion:</Form.Label>
              <Form.Control
                name="adress"
                type="text"
                required
                maxLength={50}
                value={newProperty.adress}
                onChange={handleInput}
              />
            </Form.Group>
            <br></br>

            <Form.Group controlId="country">
              <Form.Label>Pais:</Form.Label>
              <Form.Control
                name="country"
                type="text"
                maxLength={50}
                required
                value={newProperty.country}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>Ciudad:</Form.Label>
              <Form.Control
                name="city"
                type="text"
                maxLength={50}
                required
                value={newProperty.city}
                onChange={handleInput}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="Locate">
              <Form.Label>Barrio:</Form.Label>
              <Form.Control
                name="locate"
                type="text"
                maxLength={50}
                required
                value={newProperty.locate}
                onChange={handleInput}
              />
            </Form.Group>

            <input
              type="file"
              name="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleImage}
            />

            <br></br>
            <Form.Group controlId="category">
              <Form.Label>Categoría:</Form.Label>
              <Form.Select
                name="category"
                value={newProperty.category}
                onChange={handleInput}
                isInvalid={!!errors.category}
                required
              >
                <option value="">Seleccionar categoría...</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="operation">
              <Form.Label>Operacion:</Form.Label>
              <Form.Select
                name="operation"
                value={newProperty.operation}
                onChange={handleInput}
                isInvalid={!!errors.operation}
                required
              >
                <option value="">Seleccionar categoría...</option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.operation}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="enviroments">
              <Form.Label>Ambientes:</Form.Label>
              <Form.Select
                name="enviroments"
                value={newProperty.enviroments}
                onChange={handleInput}
                isInvalid={!!errors.enviroments}
                required
              >
                <option value="">Seleccionar ambientes...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.enviroments}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="bathrooms">
              <Form.Label>Baños:</Form.Label>
              <Form.Select
                name="bathrooms"
                value={newProperty.bathrooms}
                onChange={handleInput}
                isInvalid={!!errors.bathrooms}
                required
              >
                <option value="">Seleccionar baños...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.enviroments}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="rooms">
              <Form.Label>Habitaciones:</Form.Label>
              <Form.Select
                name="rooms"
                value={newProperty.rooms}
                onChange={handleInput}
                isInvalid={!!errors.rooms}
                required
              >
                <option value="">Seleccionar habitaciones...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.enviroments}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="meters">
              <Form.Label>Metros:</Form.Label>
              <Form.Control
                name="meters"
                type="number"
                required
                maxLength={10}
                value={newProperty.meters}
                onChange={handleInput}
              />
            </Form.Group>
            <br></br>

            <Form.Group controlId="price">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                name="price"
                type="number"
                required
                value={newProperty.price}
                onChange={handleInput}
              />
            </Form.Group>
            <br></br>

            <button class="btn btn-info" type="submit">
              Guardar
            </button>
          </form>
        </div>
        <Nav>
          <Nav.Link href="/properties">
            <button type="button" class="btn btn-info">
              Volver
            </button>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default UpdateProperty;
