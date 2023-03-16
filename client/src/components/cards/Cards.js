import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import image_cuatro from "./image_4.png";
import Dropdown from "react-bootstrap/Dropdown";

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

    return data;
  };
  console.log(properties);

  return (
    <div className="container">
      <p></p>
      <img src={image_cuatro}></img>
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
                bathrooms={card.bathrooms}
                enviroments={card.enviroments}
                meters={card.meters}
                avaible={card.avaible}
                operation={card.operation}
                city={card.city8}
                price={card.price}
                country={card.country}
                locate={card.locate}
                category={card.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
