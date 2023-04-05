import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/form.css";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

function PropertyEdit() {
  const { id } = useParams();

  const [newProperty, setNewProperty] = useState({
    title: "",
    description: "",
    adress: "",
    category: "",
    city: "",
    locate: "",
    country: "",
    operation: "",
    enviroments: 0,
    bathrooms: 0,
    meters: "",
    rooms: 0,
    price: 0,
  });

  const editProperty = () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    console.log(newProperty);
    console.log(id);
    axios
      .put(
        `http://localhost:3001/api/properties/${id}`,
        {
          newProperty,

          token,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("la propiedad ha sido editada", response);
        // la propiedad ha sido editada con éxito
      })
      .catch((error) => {
        console.log("Aca esta el error", error);
        // ha ocurrido un error al crear la propiedad
      });
  };

  return (
    <div>
      <h1>Edita tu propiedad!!</h1>
      <form className="formulario">
        <label>
          Título:
          <input
            name="title"
            id="title"
            required
            type="text"
            value={newProperty.title}
            onChange={(e) =>
              setNewProperty({ ...newProperty, title: e.target.value })
            }
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
            value={newProperty.description}
            onChange={(e) =>
              setNewProperty({ ...newProperty, description: e.target.value })
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
            value={newProperty.price}
            onChange={(e) =>
              setNewProperty({ ...newProperty, price: e.target.value })
            }
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
            value={newProperty.category}
            onChange={(e) =>
              setNewProperty({ ...newProperty, category: e.target.value })
            }
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
            value={newProperty.adress}
            onChange={(e) =>
              setNewProperty({ ...newProperty, adress: e.target.value })
            }
          />
        </label>

        <p></p>

        <label>
          Barrio:
          <input
            id="locate"
            name="locate"
            required
            type="text"
            value={newProperty.locate}
            onChange={(e) =>
              setNewProperty({ ...newProperty, locate: e.target.value })
            }
          />
        </label>
        <p></p>
        <p></p>

        <label>
          Ciudad:
          <input
            id="city"
            name="city"
            required
            type="text"
            value={newProperty.city}
            onChange={(e) =>
              setNewProperty({ ...newProperty, city: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Pais:
          <input
            id="country"
            name="country"
            required
            type="text"
            value={newProperty.country}
            onChange={(e) =>
              setNewProperty({ ...newProperty, country: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Operación:
          <input
            id="operation"
            name="operation"
            required
            type="text"
            value={newProperty.operation}
            onChange={(e) =>
              setNewProperty({ ...newProperty, operation: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Ambientes:
          <input
            id="enviroments"
            name="enviroments"
            required
            type="number"
            value={newProperty.enviroments}
            onChange={(e) =>
              setNewProperty({ ...newProperty, enviroments: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Baños:
          <input
            id="bathrooms"
            name="bathrooms"
            required
            type="number"
            value={newProperty.bathrooms}
            onChange={(e) =>
              setNewProperty({ ...newProperty, bathrooms: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Metros:
          <input
            id="meters"
            name="meters"
            required
            type="text"
            value={newProperty.meters}
            onChange={(e) =>
              setNewProperty({ ...newProperty, meters: e.target.value })
            }
          />
        </label>
        <p></p>
        <label>
          Habitaciones:
          <input
            id="rooms"
            name="rooms"
            required
            type="number"
            value={newProperty.rooms}
            onChange={(e) =>
              setNewProperty({ ...newProperty, rooms: e.target.value })
            }
          />
        </label>
        <button type="button" class="btn btn-success" onClick={editProperty}>
          Guardar
        </button>
      </form>

      <Nav>
        <Nav.Link href="/properties">
          <button type="button" class="btn btn-info">
            Volver
          </button>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default PropertyEdit;
