import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Card from "./Card";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import imagenInicio from "../assets/imagenInicio.png";

//rfc
const Search = () => {
  const search = useSelector((state) => state.search);
  console.log(search, "search");
  return (
    <div className="container">
      <p></p>
      <img src={imagenInicio}></img>
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
          {search.length === 0
            ? null
            : search?.map((card) => (
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
};

export default Search;
