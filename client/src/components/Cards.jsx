import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import imagenInicio from "../assets/imagenInicio.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Nav } from "react-bootstrap";
import "../styles/cards.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../store/user";
import { message } from "antd";

function Cards() {
  const [messageApi, contextHolder] = message.useMessage();
  const [busqueda, setBusqueda] = useState("");
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

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

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  //Esta función filtra la matriz "properties" por un término de búsqueda específico en la propiedad "title", "locate" y "country"
  //actualiza la matriz "properties" con los elementos que coinciden con la búsqueda.
  const filtrar = (terminoDeBusqueda) => {
    var resultadoBusqueda = properties.filter((element) => {
      if (
        element.title
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase()) ||
        element.locate
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase()) ||
        element.country
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase())
      ) {
        return element;
      }
    });
    if (terminoDeBusqueda === "") {
      window.location.reload(false);
    } else {
      setProperties(resultadoBusqueda);
    }
  };

  //Ordena los precios de menor a mayor
  const handleSubmitLessPrice = () => {
    const ordenadoMenor = properties.slice().sort(function (a, b) {
      return a.price - b.price;
    });

    setProperties(ordenadoMenor);
  };

  //Ordena las habitaciones de menor a mayor
  const handleSubmitLessEnviroments = () => {
    const ordenadoMenor = properties.slice().sort(function (a, b) {
      return a.enviroments - b.enviroments;
    });

    setProperties(ordenadoMenor);
  };

  // const handleSubmitRoom = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(http://localhost:3001/api/properties/rooms/${input}, {
  //       withCredentials: true,
  //     })
  //     .then((res) => setProperties(res.data))
  //     .catch((error) => console.log("Fallo", error));
  // };

  //const user = useSelector((state) => state.user);

  const handleAddFavorites = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/api/favorites/addFavorites",
        {
          idProperty: id,

          id: user.id,

          token,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(addFavorites(res.data)));
    messageApi
      .open({
        type: "success",
        content: "Propiedad agregada a favoritos",
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {contextHolder}
      <div className="container">
        <p></p>
        <img src={imagenInicio} class="img-fluid"></img>
        <p></p>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar propiedades..."
            aria-label="Search"
            value={busqueda}
            onChange={handleChange}
          />
        </form>

        <>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Filtrar por
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item
                href="#/action-2"
                onClick={handleSubmitLessEnviroments}
              >
                Ambientes
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={handleSubmitLessPrice}>
                Precio
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </>
        <p></p>

        <h1 className="texto_propiedad"> PROPIEDADES DISPONIBLES </h1>

        <div className="container justify-content-center align-items-center ">
          <div className="row">
            {properties?.map((card) => (
              <div className="col-md-4 my-5 mb-4" key={card.id}>
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
                    <button type="button" class="btn btn-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill padding"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      Ver más
                    </button>
                  </Nav.Link>

                  <div className="favoritos">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => handleAddFavorites(card.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-square-heart-fill padding"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                      </svg>
                      Agregar a Favoritos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

// const [input, setInput] = useState("");

// const fetchData = (value) => {
//   fetch("http://localhost:3001/api/properties/search")
//     .then((response) => response.json())
//     .then((json) => {
//       const results = json.filter((user) => {
//         return user && user.name.toLowerCase().includes(value)
//       })
//       console.log(results)

//     });
// };

// const handleChange = (value) => {
//   setInput(value);
//   fetchData(value);
// };
