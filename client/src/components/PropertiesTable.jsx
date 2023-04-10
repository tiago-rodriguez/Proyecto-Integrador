import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../styles/table.css";

function PropertiesTable() {
  useEffect(() => {
    getAllProperties().then((propiedades) => {
      setProperties(propiedades);
    });
  }, []);
  const [properties, setProperties] = useState([]);
  const getAllProperties = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/properties/getAllProperties"
    );
    //SetProperties
    //La linea 14 en la 9

    return data;
  };

  const deleteProperties = async (id) => {
    const token = window.localStorage.getItem("token");

    if (window.confirm("¿Estás seguro que deseas eliminar esta propiedad?")) {
      try {
        await axios.delete(`http://localhost:3001/api/properties/${id}`, {
          data: { token },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProperties(properties.filter((property) => property.id !== id));
        console.log(`Property with ID ${id} has been deleted`);
      } catch (error) {
        console.error(
          `Error deleting property with ID ${id}: ${error.message}`
        );
      }
    }
  };

  return (
    <>
      <div class="d-flex justify-content-between mb-2 ms-2 mt-2 ">
        <Nav.Link href="/createPropertie">
          <button type="button" class="btn btn-success">
            Agregar
          </button>
        </Nav.Link>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr class="table-secondary sticky-top">
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Address</th>
              <th>Rooms</th>
              <th>Bathrooms</th>
              <th>Environments</th>
              <th>Meters²</th>
              <th>Operation</th>
              <th>City</th>
              <th>Price</th>
              <th>Country</th>
              <th>Barrio</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr>
                <th scope="row">{property.id}</th>
                <td>{property.title}</td>
                <td>{property.description}</td>
                <td>{property.adress}</td>
                <td>{property.rooms}</td>
                <td>{property.bathrooms}</td>
                <td>{property.enviroments}</td>
                <td>{property.meters} m² </td>
                <td>{property.operation}</td>
                <td>{property.city}</td>
                <td>${property.price}</td>
                <td>{property.country}</td>
                <td>{property.locate}</td>
                <td>{property.category}</td>
                <td>
                  <div>
                    <Nav.Link href={`/editPropertie/${property.id}`}>
                      <button type="button" class="btn btn-warning">
                        Editar
                      </button>
                    </Nav.Link>
                  </div>
                  <p></p>

                  <div>
                    <Nav.Link href="">
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteProperties(property.id)}
                      >
                        Eliminar
                      </button>
                    </Nav.Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PropertiesTable;
