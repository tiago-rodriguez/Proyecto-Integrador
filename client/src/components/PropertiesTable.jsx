import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
    console.log(token);
    try {
      await axios.delete(`http://localhost:3001/api/properties/${id}`, {
        data: { token },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProperties(properties.filter((property) => property.id !== id));

      console.log(`User with ID ${id} has been deleted`);
    } catch (error) {
      console.error(`Error deleting property with ID ${id}: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="col-md-4">
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Adress</th>
                <th scope="col">Rooms</th>
                <th scope="col">Bathrooms</th>
                <th scope="col">Enviroments</th>
                <th scope="col">Meters</th>
                <th scope="col">Operation</th>
                <th scope="col">City</th>
                <th scope="col">Price</th>
                <th scope="col">Country</th>
                <th scope="col">Locate</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
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
                  <td>{property.meters}</td>
                  <td>{property.operation}</td>
                  <td>{property.city}</td>
                  <td>{property.price}</td>
                  <td>{property.country}</td>
                  <td>{property.locate}</td>
                  <td>{property.category}</td>
                  <td>
                    <Nav className="me-auto">
                      <Nav.Link href="/createPropertie">
                        <button type="button" class="btn btn-success">
                          Agregar
                        </button>
                      </Nav.Link>
                    </Nav>

                    <Nav className="me-auto">
                      <Nav.Link href="">
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => deleteProperties(property.id)}
                        >
                          Eliminar
                        </button>
                      </Nav.Link>
                    </Nav>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PropertiesTable;
