import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { Nav } from "react-bootstrap";

function UpdateProperty() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [adress, setAdress] = useState("");
  // const [image, setImage] = useState("");
  // const [bathrooms, setBathrooms] = useState("");
  // const [rooms, setRooms] = useState("");
  // const [enviroments, setEnviroments] = useState("");
  // const [meters, setMeters] = useState("");
  // const [operation, setOperation] = useState("");
  // const [city, setCity] = useState("");
  // const [price, setPrice] = useState("");
  // const [country, setCountry] = useState("");
  // const [locate, setLocate] = useState("");
  // const [category, setCategory] = useState("");

  const [newProperty, setNewProperty] = useState({
    title: "",
    description: "",
    adress: "",
    category: "",
    city: "",
    locate: "",
    country: "",
    operation: "",
    enviroments: "",
    bathrooms: "",
    meters: "",
    rooms: "",
    price: 0,
  });

  const createProperty = () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    axios
      .post("http://localhost:3001/api/properties/create", newProperty, {
        data: { token },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log("la propiedad ha sido creada", response);
        // la propiedad ha sido creada con éxito, puedes hacer algo con la respuesta si quieres
      })
      .catch((error) => {
        console.log("Aca esta el error", error);
        // ha ocurrido un error al crear la propiedad, puedes manejar el error aquí
      });
  };

  return (
    <div>
      <h1>Crea tu propiedad!!</h1>
      <form>
        <label>
          Título:
          <input
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
          Ciudad:
          <input
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
            required
            type="text"
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
            required
            type="text"
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
            required
            type="text"
            value={newProperty.rooms}
            onChange={(e) =>
              setNewProperty({ ...newProperty, rooms: e.target.value })
            }
          />
        </label>
      </form>

      <button type="button" class="btn btn-success" onClick={createProperty}>
        Guardar
      </button>
    </div>
  );
}

export default UpdateProperty;
