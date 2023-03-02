import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import image_8 from "./image_8.png";
import image_3 from "./image_3.jpg";
import image_1 from "./image_1.jpg";
import image_4 from "./image_4.png";

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
      <img src={image_4}></img>
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
