import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div class="profile_bg">
      <div class="container">
        <div class="row d-flex justify-content-center ">
          <div class="col-md-10 mt-5 pt-5 ">
            <div class="row z-depth-3 ">
              <div class="col-sm-4 bg-info rounded-left">
                <div class="card-block text-center text-white ">
                  <i class="fas fa-user-tie fa-7x mt-5 bi bi-person"></i>
                  <h2 class="font-weight-bold mt-4"></h2>
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
                <h3 class="mt-3 text-center"> Informacion del Usuario </h3>
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
                  <div class="col-sm-6">
                    <p class="font-weight-bold">Admin:</p>
                    <h6 class="text-muted">{user.admin}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
