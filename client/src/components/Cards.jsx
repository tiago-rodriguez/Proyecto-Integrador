import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import imagenInicio from "../assets/imagenInicio.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Nav } from "react-bootstrap";

function Cards() {
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

  return (
    <div className="container">
      <p></p>
      <img src={imagenInicio} class="img-fluid"></img>
      <p></p>
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Filtrar por
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-2">Ambientes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Precio</Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </>
      <p></p>
      <div className="container justify-content-center align-items-center ">
        <div className="row">
          {properties?.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                adress={card.adress}
                rooms={card.rooms}
                image={card.image}
                image_2={card.image_2}
                image_3={card.image_3}
                image_4={card.image_4}
                image_5={card.image_5}
                image_6={card.image_6}
                bathrooms={card.bathrooms}
                enviroments={card.enviroments}
                meters={card.meters}
                avaible={card.avaible}
                operation={card.operation}
                city={card.city}
                price={card.price}
                country={card.country}
                locate={card.locate}
                category={card.category}
              />

              <div className="verMas">
                <Nav.Link href={`/propertyDetail/${card.id}`}>
                  <button type="button" class="btn btn-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                  Ver más
                </Nav.Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
