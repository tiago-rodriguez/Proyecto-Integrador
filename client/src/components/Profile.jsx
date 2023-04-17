import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import "../styles/profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Profile = () => {
  const { id } = useParams();

  const [favorites, setFavorites] = useState([]);
  const [properties, setProperties] = useState([]);
  const user = useSelector((state) => state.user);
  console.log("esto es user", user);

  useEffect(() => {
    getAllProperties().then((propiedades) => {
      setProperties(propiedades);
    });
  }, []);
  const getAllProperties = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/properties/getAllProperties"
    );
    //SetProperties
    //La linea 14 en la 9

    return data;
  };

  useEffect(() => {
    getAllFavorites().then((favoritos) => {
      setFavorites(favoritos);
    });
  }, [user.id]);

  //Obtiene todos los favoritos mediante el id del usuario
  const getAllFavorites = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/favorites/getAllFavorites",
      {
        id: user.id,
      }
    );

    return data;
  };
  const handleRemoveFavorite = (id) => {
    const confirmed = window.confirm(
      "¿Está seguro de que desea eliminar esta propiedad de sus favoritos?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:3001/api/favorites/deleteFavorites/${id}`)
        .then((response) => {
          console.log(response.data.message);
          // Hacer algo en caso de que el favorito haya sido eliminado exitosamente
        })
        .then(() => window.location.reload(false))
        .catch((error) => {
          console.error(error.response.data.message);
        });
    }
  };

  return (
    <div class="profile_bg">
      <div class="container">
        <div class="row d-flex justify-content-center ">
          <div class="col-md-10 mt-5 pt-5 ">
            <div class="row z-depth-3 ">
              <div class="col-sm-4 bg-info rounded-left">
                <div class="card-block text-center text-white ">
                  <i class="fas fa-user-tie fa-7x mt-5 bi bi-person"></i>
                  <h2 class="font-weight-bold mt-5"></h2>
                  <div className="Contenedor-icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      fill="currentColor"
                      class="bi bi-person-vcard"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                    </svg>
                  </div>

                  <i class="far fa-edit-tie fa-2x mb-4"></i>
                </div>
              </div>
              <div class="col-sm-8 bg-light rounded-right ">
                <h3 class="mt-3 text-center"> Información del Usuario </h3>
                <hr class="badge-primary mt-0 w-25"></hr>
                <div class="row">
                  <div class="col-sm-6">
                    <p class="font-weight-bold">Nombre:</p>

                    <h6 class="text-muted">{user.nombre}</h6>
                  </div>
                  <div class="col-sm-6">
                    <p class="font-weight-bold">Apellido:</p>
                    <h6 class="text-muted">{user.apellido}</h6>
                  </div>
                  <div class="col-sm-6">
                    <p class="font-weight-bold">Email:</p>
                    <h6 class="text-muted">{user.email}</h6>
                  </div>
                  <div class="col-sm-6">
                    <p class="font-weight-bold">Celular:</p>
                    <h6 class="text-muted">{user.cellPhone}</h6>
                  </div>
                </div>

                <Nav>
                  <Nav.Link href={`/editUser/${user.id}`}>
                    <button type="button" class="btn btn-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                      Editar
                    </button>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </div>
        </div>

        <h1 className="texto_favoritos"> Favoritos: ({favorites.length}) </h1>
        {/* // Se usa el operador ? para verificar si properties[favorite.propertyId] es nulo o indefinido antes de 
        intentar acceder a la propiedad image */}
        <div className="row mt-3 container_cards">
          {favorites.map((favorite) => (
            <div class="card ms-3 mb-3" style={{ width: "20rem" }}>
              <img
                class="card-img-top mt-3 caja_imagen "
                src={properties[favorite.propertyId]?.image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title title_size">
                  {properties[favorite.propertyId]?.title}
                </h5>
                <p class="card-text description_size">
                  {properties[favorite.propertyId]?.description.slice(0, 120)}
                  ...
                </p>

                <div className="envolvente">
                  <Nav.Link href={`/propertyDetail/${favorite.propertyId}`}>
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

                  <button
                    type="submit"
                    class="btn btn-danger"
                    onClick={() => handleRemoveFavorite(favorite.id)}
                  >
                    Eliminar Favorito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
